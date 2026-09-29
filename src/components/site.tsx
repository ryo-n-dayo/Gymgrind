import Link from 'next/link'
import { content } from '@/content'
import { localePath, locales, type Locale } from '@/i18n'

const languageNames: Record<Locale, string> = { ja: '日本語', en: 'English' }

// A plain <a> rather than <Link>: Link would prefetch the ?lang= URL, and the proxy saves the language as soon as that URL is requested.
function LanguageSwitch({ locale, path }: { locale: Locale; path: string }) {
  return <nav className="lang-switch" aria-label={content[locale].header.languageLabel}>{locales.map((option) => <a key={option} href={`${localePath(option, path)}?lang=${option}`} hrefLang={option} lang={option} aria-current={option === locale ? 'true' : undefined}>{languageNames[option]}</a>)}</nav>
}

export function Header({ locale, path }: { locale: Locale; path: string }) {
  const t = content[locale].header
  return <header className="site-header"><Link className="brand" href={localePath(locale, '/')}><span className="brand-mark">G</span>Gymgrind</Link><div className="header-end"><nav className="site-nav" aria-label={t.menuLabel}><Link href={localePath(locale, '/privacy')}>{t.privacy}</Link><Link href={localePath(locale, '/support')}>{t.support}</Link></nav><LanguageSwitch locale={locale} path={path} /></div></header>
}

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale].footer
  return <footer className="site-footer">© 2026 Gymgrind · <Link href={localePath(locale, '/privacy')}>{t.privacy}</Link> · <Link href={localePath(locale, '/support')}>{t.support}</Link></footer>
}

export function PhoneMockup({ label }: { label: string }) {
  return <div className="phone" aria-label={label}><div className="phone-screen"><span className="phone-label">TODAY</span><div className="phone-title">Gymgrind</div><div className="workout-card"><strong>Bench Press</strong><span>60 kg × 8 reps · 3 sets</span><div className="progress"><i /></div></div><div className="workout-card"><strong>Lat Pulldown</strong><span>45 kg × 10 reps · 3 sets</span><div className="progress"><i className="progress-short" /></div></div><div className="workout-card"><strong>Rest timer</strong><span>01:30 remaining</span></div></div></div>
}

type PolicySection = { heading: string; body: string }
export function Policy({ sections }: { sections: PolicySection[] }) {
  return <>{sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}</>
}
