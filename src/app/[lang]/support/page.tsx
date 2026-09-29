import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Footer, Header } from '@/components/site'
import { content, mailto } from '@/content'
import { hasLocale, pageMetadata } from '@/i18n'

function Faq({ heading, children }: { heading: string; children: React.ReactNode }) { return <section className="faq"><h3>{heading}</h3><p>{children}</p></section> }

export async function generateMetadata({ params }: PageProps<'/[lang]/support'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return pageMetadata(lang, '/support', content[lang].support.title, content[lang].support.description)
}

export default async function SupportPage({ params }: PageProps<'/[lang]/support'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const t = content[lang].support
  return <><Header locale={lang} path="/support" /><main className="legal-page"><p className="eyebrow">Support</p><h1>{t.heading}</h1><p className="updated">{t.intro}</p><div className="support-card"><h2>{t.contactHeading}</h2><p>{t.contactBody}</p><a className="button" href={mailto(t.mailSubject)}>{t.contactButton}</a></div>{t.faq.map((item) => <Faq key={item.heading} heading={item.heading}>{item.body}</Faq>)}</main><Footer locale={lang} /></>
}
