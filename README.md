# Gymgrind

ワークアウトの記録（種目・重量・回数）を管理できる、iPhone専用のトレーニング記録アプリです。

- アカウント登録不要
- 通信は一切行わず、記録はすべて端末内に保存
- 広告・解析ツールなし
- AI分析はApple Intelligence（オンデバイス）のみを使用

このリポジトリには、アプリの紹介・プライバシーポリシー・サポートページを表示するNext.jsサイトが含まれます。iOSアプリ本体のソースコードは含まれません。

サイトは日本語と英語に対応しています。日本語は `/privacy`、英語は `/en/privacy` のように `/en` の下にあり、初めて開いたときはブラウザの言語で自動的に選ばれます。ヘッダーの「日本語 / English」で切り替えると、その選択が優先されます。

## リンク

- [App Storeで見る](https://apps.apple.com/jp/app/gymgrind/id6790394636)
- [公式サイト（Vercel）](https://gymgrind.vercel.app/)
- [プライバシーポリシー](https://gymgrind.vercel.app/privacy)（[英語](https://gymgrind.vercel.app/en/privacy)）
- [サポート](https://gymgrind.vercel.app/support)（[英語](https://gymgrind.vercel.app/en/support)）

---

# Gymgrind

Gymgrind is an iPhone-only workout logging app for tracking exercises, weight, and reps.

- No account required
- No network communication — all records stay on-device
- No ads or analytics
- AI analysis uses Apple Intelligence (on-device) only

This repository includes the Next.js marketing, privacy policy, and support site. It does not include the iOS app source code.

The site is in Japanese and English. Japanese pages have no prefix (`/privacy`) and English pages are under `/en` (`/en/privacy`). On the first visit the language follows the browser; choosing "日本語 / English" in the header overrides that.

## Links

- [Download on the App Store](https://apps.apple.com/app/gymgrind/id6790394636)
- [Website (Vercel)](https://gymgrind.vercel.app/en)
- [Privacy Policy](https://gymgrind.vercel.app/en/privacy)
- [Support](https://gymgrind.vercel.app/en/support)

## Hosting

Vercel automatically deploys the Next.js app from `main`. GitHub Pages still serves `docs/` at ryo-n-dayo.github.io/Gymgrind, where each page now forwards to the same page on Vercel.
