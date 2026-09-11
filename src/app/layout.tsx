import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Gymgrind — ワークアウト記録アプリ', description: 'iPhoneで使える、シンプルなワークアウト記録アプリ。' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>
}
