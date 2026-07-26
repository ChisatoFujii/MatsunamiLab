# Coding Rules

Version: 1.0

## 目的

本プロジェクトのコード品質・保守性・可読性を維持するための共通ルールを定義する。

---

# 基本方針

- 読みやすさを最優先する
- シンプルな実装を選択する
- 再利用できるものはコンポーネント化する
- コメントより名前で意味を伝える
- AIが理解しやすい構造を意識する

---

# 使用技術

- Astro
- TypeScript
- Tailwind CSS
- Markdown
- Git
- GitHub

---

# 命名規則

## コンポーネント

PascalCase

例

```
Hero.astro
BlogCard.astro
Header.astro
```

---

## ファイル

基本はPascalCase

```
About.astro
ProfileCard.astro
```

ユーティリティはcamelCase可

```
formatDate.ts
getPosts.ts
```

---

## 変数

camelCase

```
userName
articleList
publishDate
```

---

## 定数

SCREAMING_SNAKE_CASE

```
MAX_POSTS
SITE_NAME
```

---

## CSS

Tailwindを使用するため独自CSSは最小限。

---

# ディレクトリ構成

```
src/
 components/
 layouts/
 pages/
 styles/
 content/
 utils/

public/

docs/
```

---

# TypeScript

- anyは禁止
- 型を明示する
- interfaceを優先
- unknownを適切に利用する

例

```ts
interface Article {
  title: string;
  description: string;
  date: Date;
}
```

---

# Astro

1ページ1ファイル

複雑になったらコンポーネントへ分離する。

---

# コンポーネント

1つの責務だけ持つ。

悪い例

```
Header + Footer + Hero
```

良い例

```
Header
Footer
Hero
```

---

# Tailwind

優先順位

1. Tailwind Utility
2. CSS Variables
3. 独自CSS

!importantは禁止。

---

# コメント

コメントを書くよりコードを分かりやすくする。

必要な場合のみ記載。

例

```ts
// Google Analytics 初期化
```

---

# Git

コミットは小さく行う。

例

```
feat: add profile page

fix: mobile layout

docs: update architecture

refactor: simplify Header component
```

---

# Markdown

見出し構造を守る。

```
#

##

###
```

画像にはaltを付ける。

---

# パフォーマンス

- 画像はWebPを優先
- Lazy Loadを利用
- 不要なJavaScriptを読み込まない
- Lighthouseを意識する

---

# SEO

必須

- title
- description
- OGP
- sitemap
- robots.txt
- canonical

---

# アクセシビリティ

- altを付与
- ボタンにはbuttonタグ
- 見出し順を守る
- キーボード操作可能

---

# セキュリティ

- APIキーはGitHubへコミットしない
- .envを利用する
- XSSを防ぐ
- 外部ライブラリは必要最小限

---

# コードレビュー

以下を確認する。

- 可読性
- 型安全
- レスポンシブ対応
- SEO
- アクセシビリティ
- パフォーマンス
- 不要コードの有無

---

# AI利用ルール

ChatGPT・Claude・GitHub Copilot等のAI利用を許可する。

ただし

- 出力コードは必ずレビューする
- 内容を理解してから採用する
- 機密情報を入力しない

---

# このドキュメント

必要に応じて更新する。

Versionを更新し、変更履歴を残す。