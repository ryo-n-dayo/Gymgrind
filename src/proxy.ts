import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, hasLocale, localePath, type Locale } from '@/i18n'

const cookieName = 'lang'
const oneYear = 60 * 60 * 24 * 365

// Japanese pages are served without a prefix (/privacy) from app/[lang] with lang = ja; English pages are /en/....
// An unprefixed URL opened by a browser that prefers another language goes to the English page, unless the
// visitor has picked a language with the switcher (?lang=), which is kept in a cookie. /en URLs are always English,
// so a link to the English privacy policy shows it as-is.
export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')
  const isJapanese = pathname === '/ja' || pathname.startsWith('/ja/')
  const path = isEnglish || isJapanese ? pathname.slice(3) || '/' : pathname

  const chosen = searchParams.get('lang')
  if (chosen && hasLocale(chosen)) {
    const response = redirect(request, localePath(chosen, path))
    response.cookies.set(cookieName, chosen, { path: '/', maxAge: oneYear, sameSite: 'lax' })
    return response
  }

  if (isEnglish) return NextResponse.next()
  // /ja/... is only the internal route; the public Japanese URL has no prefix
  if (isJapanese) return redirect(request, path)

  const saved = request.cookies.get(cookieName)?.value
  const locale = saved && hasLocale(saved) ? saved : fromAcceptLanguage(request.headers.get('accept-language'))
  if (locale === 'en') return redirect(request, localePath('en', path))
  const url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? '/ja' : `/ja${pathname}`
  return NextResponse.rewrite(url)
}

function redirect(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone()
  url.pathname = pathname
  url.searchParams.delete('lang')
  return NextResponse.redirect(url)
}

// The first of ja / en in the visitor's language list wins. Browsers that list neither get English, which they are
// more likely to read; requests without the header (most crawlers) stay on Japanese.
function fromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale
  const ranked = header
    .split(',')
    .map((part, index) => {
      const [tag, ...params] = part.trim().toLowerCase().split(';')
      const q = params.map((param) => param.trim()).find((param) => param.startsWith('q='))
      return { language: tag.trim().split('-')[0], q: q ? Number(q.slice(2)) : 1, index }
    })
    .filter((entry) => entry.language && entry.language !== '*' && entry.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index)
  if (ranked.length === 0) return defaultLocale
  return ranked.find((entry) => entry.language === 'ja' || entry.language === 'en')?.language === 'ja' ? 'ja' : 'en'
}

export const config = {
  // Pages only: skip Next's own files and anything with a file extension
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
