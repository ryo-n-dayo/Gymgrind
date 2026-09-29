import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Footer, Header, Policy } from '@/components/site'
import { content } from '@/content'
import { hasLocale, pageMetadata } from '@/i18n'

export async function generateMetadata({ params }: PageProps<'/[lang]/privacy'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return pageMetadata(lang, '/privacy', content[lang].privacy.title, content[lang].privacy.description)
}

export default async function PrivacyPage({ params }: PageProps<'/[lang]/privacy'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const t = content[lang].privacy
  return <><Header locale={lang} path="/privacy" /><main className="legal-page"><p className="eyebrow">Privacy policy</p><h1>{t.heading}</h1><p className="updated">{t.updated}</p><div className="legal-intro">{t.intro}</div><Policy sections={t.sections} /></main><Footer locale={lang} /></>
}
