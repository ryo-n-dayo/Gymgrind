import Link from 'next/link'

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><span className="brand-mark">G</span>Gymgrind</Link><nav className="site-nav" aria-label="サイトメニュー"><Link href="/privacy">Privacy</Link><Link href="/support">Support</Link></nav></header>
}

export function Footer() {
  return <footer className="site-footer">© 2026 Gymgrind · <Link href="/privacy">Privacy Policy</Link> · <Link href="/support">Support</Link></footer>
}

export function PhoneMockup() {
  return <div className="phone" aria-label="Gymgrindの記録画面をイメージしたデザイン"><div className="phone-screen"><span className="phone-label">TODAY</span><div className="phone-title">Gymgrind</div><div className="workout-card"><strong>Bench Press</strong><span>60 kg × 8 reps · 3 sets</span><div className="progress"><i /></div></div><div className="workout-card"><strong>Lat Pulldown</strong><span>45 kg × 10 reps · 3 sets</span><div className="progress"><i className="progress-short" /></div></div><div className="workout-card"><strong>Rest timer</strong><span>01:30 remaining</span></div></div></div>
}

type PolicySection = { heading: string; body: string }
export function Policy({ language, sections }: { language: string; sections: PolicySection[] }) {
  return <>{language && <p className="language-label">{language}</p>}{sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}</>
}
