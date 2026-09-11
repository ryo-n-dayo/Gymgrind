import { Footer, Header, Policy } from '@/components/site'

const japanese = [
  { heading: '保存する情報', body: '・ワークアウトの記録（種目・重量・回数・日時・メモ）\n・テンプレート、目標、お気に入り\n・アプリの設定（言語、休憩タイマー、表示設定）\n\nこれらはすべて端末内のデータベースおよび設定領域に保存されます。アプリをiPhoneから削除すると、これらのデータも削除されます。' },
  { heading: 'ヘルスケア（HealthKit）', body: '設定でオンにした場合のみ、完了したワークアウトと推定消費カロリーをヘルスケアAppに書き込みます。また、カロリーの概算に使うため直近の体重を読み取ります。\n\nヘルスケアから取得した情報を広告・マーケティング・データマイニングに利用することはなく、第三者への提供やiCloudへの保存も行いません。この連携は設定からいつでもオフにできます。' },
  { heading: 'AI分析について', body: 'AI分析とロードマップ機能は、Appleが提供する端末内蔵のApple Intelligence（オンデバイスの基盤モデル）を利用しています。分析は端末の中だけで完結し、記録や入力した質問が外部のAIサービスや開発者に送信されることはありません。\n\n生成される内容は一般的な参考情報であり、疾病の診断・治療・予防を目的としたものではありません。' },
  { heading: 'お問い合わせ・情報の削除', body: '設定の「フィードバックを送る」からご連絡いただいた場合に限り、開発者はメールアドレスとお問い合わせ内容を受け取ります。これらは不具合の調査と返信のためだけに使用し、第三者に提供することはありません。\n\nアプリ内の記録を消したい場合は、アプリをiPhoneから削除してください。すべてのデータが端末から取り除かれます。' },
]
const english = [
  { heading: 'Information we store', body: '• Workout records (exercise, weight, reps, date/time, notes)\n• Templates, goals, and favorites\n• App settings (language, rest timer, display options)\n\nAll of this is stored on-device. Deleting the app from your iPhone deletes this data as well.' },
  { heading: 'Apple Health (HealthKit)', body: 'Only when you turn it on in Settings, the app writes finished workouts and estimated calories to the Health app, and reads your most recent body weight to estimate calories.\n\nHealth data is never used for advertising, marketing, or data mining; it is never shared with third parties or stored in iCloud. You can turn this off at any time in Settings.' },
  { heading: 'About AI analysis', body: 'The AI analysis and roadmap features use Apple Intelligence, Apple’s on-device foundation model. Analysis happens entirely on-device; your records and questions are never sent to an external AI service or to the developer.\n\nGenerated content is general reference information and is not intended to diagnose, treat, or prevent any disease.' },
  { heading: 'Contact and deletion', body: 'Only if you contact us through “Send Feedback” in Settings does the developer receive your email address and message. These are used solely to investigate issues and reply to you, and are never shared with third parties. To remove all records, delete the app from your iPhone.' },
]

export default function PrivacyPage() {
  return <><Header /><main className="legal-page"><p className="eyebrow">Privacy policy</p><h1>プライバシーポリシー</h1><p className="updated">最終更新: 2026年7月25日</p><div className="legal-intro">Gymgrindは、トレーニング記録をこの端末の中だけに保存します。開発者を含む第三者のサーバーへ送信することはありません。アカウント登録は不要で、広告や解析ツールも使用していません。</div><Policy language="" sections={japanese} /><hr className="divider" /><h1>Privacy Policy</h1><p className="updated">Last updated: July 25, 2026</p><div className="legal-intro">Gymgrind stores your training records only on this device. Nothing is sent to the developer&apos;s servers or anyone else&apos;s. No account is required, and the app contains no ads or analytics.</div><Policy language="English" sections={english} /></main><Footer /></>
}
