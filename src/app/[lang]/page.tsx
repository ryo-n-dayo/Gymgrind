import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Footer, Header, PhoneMockup } from '@/components/site'
import { content } from '@/content'
import { hasLocale, pageMetadata } from '@/i18n'

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return pageMetadata(lang, '/', content[lang].home.title, content[lang].home.description)
}

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const { appStoreUrl, home: t } = content[lang]
  return <><Header locale={lang} path="/" /><main className="page"><section className="hero"><div><p className="eyebrow">{t.eyebrow}</p><h1>{t.heading}</h1><p className="lead">{t.lead}</p><a className="button" href={appStoreUrl} target="_blank" rel="noreferrer">{t.download} <span aria-hidden="true">↗</span></a><p className="note">{t.note}</p></div><PhoneMockup label={t.mockupLabel} /></section><section className="features" aria-label={t.featuresLabel}>{t.features.map((feature, index) => <article className="feature" key={feature.heading}><div className="feature-icon">{String(index + 1).padStart(2, '0')}</div><h2>{feature.heading}</h2><p>{feature.body}</p></article>)}</section><section className="import-band"><h2>{t.importHeading}</h2><p>{t.importBody}</p><ul className="chips">{t.importSources.map((source) => <li key={source}>{source}</li>)}</ul></section></main><Footer locale={lang} /></>
}
