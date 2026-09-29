import type { Metadata } from 'next'

export const locales = ['ja', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'ja'

export const siteUrl = 'https://gymgrind.vercel.app'

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value)

// Japanese pages keep the unprefixed URLs they have always had (/privacy); English pages live under /en.
export const localePath = (locale: Locale, path: string) => (locale === defaultLocale ? path : path === '/' ? '/en' : `/en${path}`)

export function pageMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: localePath(locale, path),
      languages: { ja: localePath('ja', path), en: localePath('en', path), 'x-default': localePath(defaultLocale, path) },
    },
  }
}
