import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import '../globals.css'
import { content } from '@/content'
import { appStoreId, hasLocale, locales, siteUrl } from '@/i18n'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return { metadataBase: new URL(siteUrl), title: content[lang].home.title, description: content[lang].home.description, itunes: { appId: appStoreId } }
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return <html lang={lang}><body>{children}</body></html>
}
