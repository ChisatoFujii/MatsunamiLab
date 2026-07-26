# Deployment

Version: 1.0

## 1. 目的

本ドキュメントは、本プロジェクトのデプロイ手順および運用方法を定義する。

---

# 2. 本番環境

|項目|内容|
|---|---|
|Hosting|Cloudflare Pages|
|Repository|GitHub|
|Branch|main|
|Framework|Astro|
|Node.js|LTS版|
|Build Command|npm run build|
|Output Directory|dist|

---

# 3. デプロイフロー

Developer
↓

Git Commit

↓

GitHub Push (main)

↓

Cloudflare Pages

↓

Build

↓

Deploy

↓

Public Website

Cloudflare Pages が GitHub を監視し、
main ブランチへ Push されるたび自動デプロイされる。

---

# 4. ローカル開発

インストール

```bash
npm install
```

開発サーバー

```bash
npm run dev
```

ビルド確認

```bash
npm run build
```

プレビュー

```bash
npm run preview
```

---

# 5. 環境変数

秘密情報は GitHub に保存しない。

利用する場合は Cloudflare Pages の Environment Variables に登録する。

例

```
GOOGLE_ANALYTICS_ID

GOOGLE_ADSENSE_ID

SEARCH_CONSOLE_VERIFICATION

API_KEY
```

---

# 6. デプロイ条件

以下を満たした場合のみ main へマージする。

- ビルドエラーがない
- TypeScriptエラーがない
- リンク切れがない
- デザイン崩れがない
- モバイル表示を確認済み

---

# 7. バックアップ

ソースコード

GitHub

コンテンツ

GitHub Repository

画像

GitHub または Cloudflare Images

---

# 8. 障害対応

デプロイ失敗時

1. Cloudflare Build Log を確認
2. ローカルで npm run build を実行
3. エラー修正
4. Git Push
5. 自動再デプロイ

---

# 9. 今後追加予定

- Google Analytics
- Google Search Console
- Google AdSense
- Cloudflare Web Analytics
- 独自ドメイン
- CI/CD改善
