import { Footer, Header, PhoneMockup } from '@/components/site'

const appStoreUrl = 'https://apps.apple.com/jp/app/gymgrind/id6790394636?l=en-US'

export default function Home() {
  return <><Header /><main className="page"><section className="hero"><div><p className="eyebrow">Workout logging for iPhone</p><h1>トレーニングを、迷わず記録する。</h1><p className="lead">Gymgrindは、重量・回数・休憩をすばやく記録できるiPhone向けトレーニングアプリです。記録はすべて端末内に保存されます。</p><a className="button" href={appStoreUrl} target="_blank" rel="noreferrer">App Storeで入手 <span aria-hidden="true">↗</span></a><p className="note">iPhone対応 · アカウント登録不要 · 広告・解析なし</p></div><PhoneMockup /></section><section className="features" aria-label="Gymgrindの特徴"><article className="feature"><div className="feature-icon">01</div><h2>すばやく記録</h2><p>種目・重量・回数・休憩を、トレーニングの流れを止めずに残せます。</p></article><article className="feature"><div className="feature-icon">02</div><h2>変化が見える</h2><p>履歴カレンダーと成長グラフで、日々の積み重ねを振り返れます。</p></article><article className="feature"><div className="feature-icon">03</div><h2>プライバシーを守る</h2><p>アカウント不要。記録は端末だけに保存され、広告や解析ツールも使いません。</p></article></section></main><Footer /></>
}
