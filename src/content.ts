import type { Locale } from '@/i18n'

type Section = { heading: string; body: string }

type Content = {
  appStoreUrl: string
  header: { menuLabel: string; privacy: string; support: string; languageLabel: string }
  footer: { privacy: string; support: string }
  home: {
    title: string
    description: string
    eyebrow: string
    heading: string
    lead: string
    download: string
    note: string
    mockupLabel: string
    featuresLabel: string
    features: Section[]
    importHeading: string
    importBody: string
    importSources: string[]
  }
  privacy: { title: string; description: string; heading: string; updated: string; intro: string; sections: Section[] }
  support: {
    title: string
    description: string
    heading: string
    intro: string
    contactHeading: string
    contactBody: string
    contactButton: string
    mailSubject: string
    faq: Section[]
  }
}

const supportEmail = 'ppajt5zzcf@gmail.com'
export const mailto = (subject: string) => `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}`

export const content: Record<Locale, Content> = {
  ja: {
    appStoreUrl: 'https://apps.apple.com/jp/app/gymgrind/id6790394636',
    header: { menuLabel: 'サイトメニュー', privacy: 'プライバシー', support: 'サポート', languageLabel: '言語' },
    footer: { privacy: 'プライバシーポリシー', support: 'サポート' },
    home: {
      title: 'Gymgrind — ワークアウト記録アプリ',
      description: 'iPhoneで使える、シンプルなワークアウト記録アプリ。1分の質問であなた向けのメニューを作成、他のアプリの記録も取り込めます。記録はすべて端末内に保存。',
      eyebrow: 'Workout logging for iPhone',
      heading: 'トレーニングを、迷わず記録する。',
      lead: 'Gymgrindは、重量・回数・休憩をすばやく記録できるiPhone向けトレーニングアプリです。1分の質問であなた向けのメニューも作れて、記録はすべて端末内に保存されます。',
      download: 'App Storeで入手',
      note: 'iPhone対応 · アカウント登録不要 · 広告・解析なし',
      mockupLabel: 'Gymgrindの記録画面をイメージしたデザイン',
      featuresLabel: 'Gymgrindの特徴',
      features: [
        { heading: 'あなた向けのメニュー', body: '目的・経験・1回の時間・気になる部位など1分の質問から、テンプレートと食事のめやすを作成。種目を選んだ理由と根拠の研究も読めます。' },
        { heading: '画面に触れずに休憩', body: 'ロック画面の「セット終了」、Siriの「Gymgrindで休憩」、アクションボタンで休憩タイマーを開始。追い込んだあとでも手間がかかりません。' },
        { heading: 'すばやく記録', body: 'ホイールと数値入力を切り替えて、0.1kg単位まで。前回の記録と今日の重量から、おすすめの回数も表示します。' },
        { heading: '成長が見える', body: '種目ごとのグラフと目標までの予測、どの筋肉に効くかがわかる3Dモデル、称号、ホーム画面のウィジェット。' },
        { heading: '乗り換えもかんたん', body: '他のアプリやスプレッドシート、メモに残した記録を取り込めます。種目名はGymgrindの種目に自動で合わせます。' },
        { heading: 'プライバシーを守る', body: 'アカウント不要。記録も質問への回答も端末だけに保存され、広告や解析ツールも使いません。AI分析もApple Intelligenceで端末内で完結します。' },
      ],
      importHeading: 'これまでの記録を、そのまま持ってこられます',
      importBody: '書き出したファイルを選ぶか、テキストを貼り付けるだけ。ポンドはkgに直し、取り込み済みのワークアウトは二重に入りません。',
      importSources: ['Strong', 'Hevy', 'FitNotes', 'CSV', 'Excel（.xlsx）', 'JSON', 'メモ（ベンチプレス 60kg×10回×3）'],
    },
    privacy: {
      title: 'プライバシーポリシー — Gymgrind',
      description: 'Gymgrindのプライバシーポリシー。記録は端末の中だけに保存されます。',
      heading: 'プライバシーポリシー',
      updated: '最終更新: 2026年9月29日',
      intro: 'Gymgrindは、あなたのトレーニング記録をこの端末の中だけに保存します。開発者を含む誰かのサーバーに送信することは一切ありません。アカウント登録も不要で、広告や解析ツールも使用していません。',
      sections: [
        {
          heading: '保存する情報',
          body: '・ワークアウトの記録（種目・重量・回数・日時・メモ）\n・テンプレート、目標、お気に入り\n・メニューと食事のめやすを作るための回答（目的・経験・頻度・1回の時間・重点部位。答えた場合のみ、年齢・性別・体重・身長・普段の活動量・気になる部位）\n・アプリの設定（言語、休憩タイマー、表示設定）\n\nこれらはすべて端末内のデータベースおよび設定領域に保存されます。アプリをiPhoneから削除すると、これらのデータも削除されます。',
        },
        {
          heading: 'ヘルスケア（HealthKit）',
          body: '設定でオンにした場合のみ、完了したワークアウトと推定消費カロリーをヘルスケアAppに書き込みます。また、カロリーの概算に使うため直近の体重を読み取ります。\n\nヘルスケアから取得した情報を広告・マーケティング・データマイニングに利用することは一切ありません。第三者に提供することもありません。iCloudに保存することもありません。この連携は設定からいつでもオフにできます。',
        },
        {
          heading: 'AI分析について',
          body: 'AI分析と、メニューの始め方ガイドの文章には、Appleが提供する端末内蔵のApple Intelligence（オンデバイスの基盤モデル）を利用しています。処理は端末の中だけで完結し、あなたの記録や回答、入力した質問が外部のAIサービスや開発者に送信されることはありません。\n\n生成される内容は一般的な参考情報であり、疾病の診断・治療・予防を目的としたものではありません。',
        },
        {
          heading: 'お問い合わせ・情報の削除',
          body: '設定の「フィードバックを送る」からご連絡いただいた場合に限り、開発者はあなたのメールアドレスとお問い合わせ内容を受け取ります。これらは不具合の調査とご返信のためだけに使用し、第三者に提供することはありません。削除をご希望の場合は同じ窓口までご連絡ください。\n\nアプリ内の記録を消したい場合は、アプリをiPhoneから削除してください。すべてのデータが端末から取り除かれます。',
        },
      ],
    },
    support: {
      title: 'サポート — Gymgrind',
      description: 'Gymgrindへの質問、不具合の報告、ご要望の窓口です。',
      heading: 'サポート',
      intro: 'Gymgrindについての質問、不具合の報告、ご要望はこちらからお送りください。',
      contactHeading: 'お問い合わせ',
      contactBody: '状況と再現手順をできる範囲で添えていただけると、よりスムーズに確認できます。',
      contactButton: 'メールで問い合わせる',
      mailSubject: 'Gymgrind サポート',
      faq: [
        { heading: 'Gymgrindはどんなアプリですか？', body: 'ワークアウトの記録（種目・重量・回数）を管理できる、iPhone専用のトレーニング記録アプリです。アカウント登録は不要で、通信も一切行いません。' },
        { heading: 'データはどこに保存されますか？', body: '記録はすべてこの端末の中だけに保存されます。開発者を含む外部のサーバーへ送信されることはありません。' },
        { heading: '他のアプリの記録を取り込むには？', body: '設定の「記録を取り込む」で、ファイルを選ぶかテキストを貼り付けます（最初の画面や、記録がまだないときのホーム画面からも開けます）。Strong・Hevy・FitNotesなどの書き出し（CSV）、Excel（.xlsx）、JSON、「ベンチプレス 60kg×10回×3セット」のようなメモを読み込めます。Numbersや古いExcel（.xls）のファイルは、CSVか.xlsxで書き出してから選んでください。' },
        { heading: '画面に触れずに休憩を始めるには？', body: 'ワークアウト中に、Siriに「Gymgrindで休憩」と話しかけるか、ロック画面・Dynamic Islandの「セット終了」を押します。アクションボタンで始めるには、iPhoneの設定 › アクションボタン › ショートカット で「休憩を開始」を選んでください。' },
        { heading: 'おすすめの回数を表示しないようにするには？', body: '設定の「セットの入力」で「おすすめの回数を表示」をオフにしてください。' },
        { heading: '似た種目をまとめたあと、元に戻せますか？', body: '戻せません。まとめた記録はデフォルトの種目の名前に変わります。まとめるかどうかは種目ごとに選べて、最初はどれもオフになっています。' },
        { heading: 'AI分析はどのiPhoneで使えますか？', body: 'Apple Intelligenceに対応したiPhoneで、Apple Intelligenceをオンにしているときに使えます。それ以外の機能はどのiPhoneでも使えます。' },
        { heading: '記録を削除したい場合は？', body: 'アプリ内の「編集」からセット・種目・日ごとの記録を個別に削除できます。すべてのデータを消したい場合は、アプリをiPhoneから削除してください。' },
        { heading: '不具合を見つけました。どう報告すればいいですか？', body: 'アプリ内の「設定 → フィードバックを送る」、または上記のメールアドレスから、状況と再現手順をお知らせください。' },
      ],
    },
  },
  en: {
    appStoreUrl: 'https://apps.apple.com/app/gymgrind/id6790394636',
    header: { menuLabel: 'Site menu', privacy: 'Privacy', support: 'Support', languageLabel: 'Language' },
    footer: { privacy: 'Privacy Policy', support: 'Support' },
    home: {
      title: 'Gymgrind — Workout log for iPhone',
      description: 'A simple workout logging app for iPhone. Get a plan built for you in a minute and import your past workouts from other apps. Everything stays on your device.',
      eyebrow: 'Workout logging for iPhone',
      heading: 'Log your training, without the fuss.',
      lead: 'Gymgrind is an iPhone app for logging weight, reps and rest in seconds. A minute of questions gets you a plan built for you, and every record stays on your device.',
      download: 'Download on the App Store',
      note: 'For iPhone · No account needed · No ads or analytics',
      mockupLabel: 'An illustration of the Gymgrind logging screen',
      featuresLabel: 'Gymgrind features',
      features: [
        { heading: 'A plan built for you', body: 'A minute of questions about your goal, experience, session length and areas that need care gets you templates and a nutrition guide, with the reasons and the research behind them.' },
        { heading: 'Rest without touching the screen', body: 'Start the rest timer from the Lock Screen\'s "Set Done" button, by saying "Start rest in Gymgrind" to Siri, or with the Action button, even after a set to failure.' },
        { heading: 'Log fast', body: 'Switch between wheels and a keypad, enter weights to 0.1 kg, and see a suggested rep count based on last time and today\'s weight.' },
        { heading: 'See your progress', body: 'Charts for every exercise with a forecast to your goal, a 3D model of the muscles each exercise works, ranks, and a Home Screen widget.' },
        { heading: 'Easy to switch', body: 'Bring in records from other apps, spreadsheets or your notes. Exercise names are matched to Gymgrind\'s for you.' },
        { heading: 'Private by design', body: 'No account. Your records and answers stay on your device, with no ads or analytics. AI analysis runs on-device with Apple Intelligence.' },
      ],
      importHeading: 'Bring your training history with you',
      importBody: 'Pick an exported file or paste text. Pounds are converted to kg, and workouts you already have are skipped.',
      importSources: ['Strong', 'Hevy', 'FitNotes', 'CSV', 'Excel (.xlsx)', 'JSON', 'Notes (Bench Press 60kg x 10 x 3)'],
    },
    privacy: {
      title: 'Privacy Policy — Gymgrind',
      description: 'The Gymgrind privacy policy. Your records stay on your device.',
      heading: 'Privacy Policy',
      updated: 'Last updated: September 29, 2026',
      intro: "Gymgrind stores your training records only on this device. Nothing is ever sent to the developer's servers or anyone else's. No account is required, and the app contains no ads or analytics.",
      sections: [
        {
          heading: 'Information we store',
          body: '• Workout records (exercise, weight, reps, date/time, notes)\n• Templates, goals, and favorites\n• Your answers for building your plan and nutrition guide (goal, experience, frequency, session length, priority muscles; and only if you answer them, age, sex, body weight, height, daily activity, and areas that need care)\n• App settings (language, rest timer, display options)\n\nAll of this is stored in on-device storage. Deleting the app from your iPhone deletes this data as well.',
        },
        {
          heading: 'Apple Health (HealthKit)',
          body: 'Only when you turn it on in Settings, the app writes finished workouts and estimated calories to the Health app, and reads your most recent body weight to estimate calories.\n\nHealth data is never used for advertising, marketing, or data mining, is never shared with third parties, and is never stored in iCloud. You can turn this off at any time in Settings.',
        },
        {
          heading: 'About AI analysis',
          body: "AI analysis and the text of your getting-started guide use Apple Intelligence, Apple's on-device foundation model built into your device. Processing happens entirely on-device; your records, answers, and questions are never sent to any external AI service or to the developer.\n\nThe generated content is general reference information and is not intended to diagnose, treat, or prevent any disease.",
        },
        {
          heading: 'Contact and deletion',
          body: 'Only if you contact us via "Send Feedback" in Settings does the developer receive your email address and message. These are used solely to investigate issues and reply to you, and are never shared with third parties. Contact the same address to request deletion.\n\nTo remove your records, delete the app from your iPhone; all data is removed from the device.',
        },
      ],
    },
    support: {
      title: 'Support — Gymgrind',
      description: 'Questions, bug reports, and feature requests for Gymgrind.',
      heading: 'Support',
      intro: 'Questions, bug reports, and feature requests for Gymgrind.',
      contactHeading: 'Contact us',
      contactBody: 'Please include what happened and, when possible, the steps to reproduce it.',
      contactButton: 'Email support',
      mailSubject: 'Gymgrind Support',
      faq: [
        { heading: 'What is Gymgrind?', body: 'Gymgrind is an iPhone-only workout logging app for tracking exercises, weight, and reps. No account is required, and the app makes no network requests.' },
        { heading: 'Where is my data stored?', body: "All records are stored only on this device. Nothing is sent to any external server, including the developer's." },
        { heading: 'How do I import records from another app?', body: 'In Settings, open "Import records" and pick a file or paste text (you can also start from the first screen, or from the home screen while you have no workouts yet). Exports from Strong, Hevy, FitNotes and similar apps (CSV), Excel (.xlsx), JSON, and notes such as "Bench Press 60kg x 10 x 3" can be read. For Numbers or old Excel (.xls) files, export them as CSV or .xlsx first.' },
        { heading: 'How do I start a rest without touching the screen?', body: 'During a workout, say "Start rest in Gymgrind" to Siri, or press "Set Done" on the Lock Screen or in the Dynamic Island. To use the Action button, choose "Start Rest" in the iPhone Settings app under Action Button › Shortcut.' },
        { heading: 'How do I hide the suggested rep count?', body: 'Turn off "Show suggested reps" under Set Entry in Settings.' },
        { heading: 'Can I undo combining similar exercises?', body: "No. Combined records take the built-in exercise's name. You choose each exercise to combine, and none is switched on by default." },
        { heading: 'Which iPhones can use AI analysis?', body: 'iPhones that support Apple Intelligence, with Apple Intelligence turned on. Everything else works on any iPhone.' },
        { heading: 'How do I delete my records?', body: 'You can delete individual sets, exercises, or whole days from within the app. To remove all data, delete the app from your iPhone.' },
        { heading: 'I found a bug. How do I report it?', body: 'Use Settings → Send Feedback in the app, or email the address above with what happened and how to reproduce it.' },
      ],
    },
  },
}
