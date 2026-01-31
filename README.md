# 🏭 PPC LP Factory (Powered by Astro v5)

このリポジトリは、**PPCアフィリエイトLP量産システム**です。

**Astro v5 (Content Collections)** と **Tailwind CSS v4** を採用し、コードを書かずに「Markdown（テキスト）」と「画像」を追加するだけで、爆速かつ高品質なLPを無限に生成できます。

## ⚡️ このシステムの特徴

- **📝 テキスト管理**: 案件ごとの文章はMarkdownで管理。HTMLを触る必要なし。
- **🎨 デザイン継承**: 「看護師案件」で勝利したCVRの高いデザイン（光るボタン、カード型レイアウト）を全案件に自動適用。
- **🔗 クッション自動生成**: アフィリエイトリンクへのスキップページ（`/link/案件ID`）を自動で作成。
- **📱 モバイルファースト**: スマホユーザー（9割）に最適化したUI/UX。

---

## 🚀 量産ワークフロー（1日10本目標）

以下の手順で新しい案件を追加します。

### 1. 画像の準備
`public/assets/` フォルダ内に、案件ID（例: `geekly`）のフォルダを作成し、画像を配置します。
- メインビジュアル: `mv.jpg`
- 悩みの画像: `pain.jpg`

### 2. 記事データの作成 (Markdown)
`src/content/lps/` フォルダ内に、`案件ID.md`（例: `geekly.md`）を作成します。
以下のテンプレートをコピペして中身を書き換えてください。

```yaml
---
slug: "geekly"  # URLになります (例: /geekly)
title: "IT・Web業界専門の転職支援 | Geekly"
description: "ディスクリプションを入力"
affiliateLink: "[https://px.a8.net/](https://px.a8.net/)..." # ASPのリンク
primaryColor: "#0ea5e9" # 案件のメインカラー
accentColor: "#f97316"  # ボタンの色（オレンジ推奨）

images:
  mv: "/assets/geekly/mv.jpg"
  pain: "/assets/geekly/pain.jpg"

texts:
  mvCatch: "キャッチコピーを入力"
  mvSub: "サブキャッチを入力"
  buttonText: "公式サイトを見てみる"

targets:
  - "ターゲット条件1"
  - "ターゲット条件2"
---

## Problem
ここに「悩み」の文章を書く...

## Solution
ここに「解決策」の文章を書く...

```

### 3. デプロイ（公開）

Gitにプッシュするだけで、連携したサーバー（Vercelなど）へ自動デプロイされます。

```bash
git add .
git commit -m "Add: 新規案件(geekly)追加"
git push origin main

```

---

## 📂 プロジェクト構造

```text
/
├── public/
│   └── assets/          # 🖼️ [重要] 案件ごとの画像フォルダ
│       └── geekly/      # 例: geekly用の画像
├── src/
│   ├── content/
│   │   ├── config.ts    # ⚙️ 入力項目の定義ファイル
│   │   └── lps/         # 📝 [重要] ここに .md ファイルを増やすだけ！
│   ├── layouts/
│   │   └── Layout.astro # 📐 共通レイアウト（GTM/タグはここ）
│   ├── pages/
│   │   ├── [slug].astro # ⚙️ LP生成エンジン（触らなくてOK）
│   │   ├── link/        # 🔗 クッションページ生成エンジン
│   │   ├── company.astro # 🏢 運営者情報
│   │   └── privacy.astro # 🛡️ プライバシーポリシー
│   └── styles/
│       └── global.css   # 🎨 Tailwind設定（共通デザイン）
└── astro.config.mjs

```

---

## 🛠 開発コマンド

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | **プレビュー起動**。`http://localhost:4321/案件ID` で確認できます。 |
| `npm run build` | **本番ビルド**。`dist/` フォルダにファイルを生成します。 |
| `npm run preview` | ビルド後の動作確認。 |

---

## 📚 運用メモ & レギュレーション

* **クッションページ**: LP内のボタンはすべて `/link/案件ID` に自動設定され、そこからASPリンクへ飛びます。
* **GTMタグ**: `src/layouts/Layout.astro` 内に記述されています。全LPに共通で適用されます。
* **運営者情報**: 変更がある場合は `src/pages/company.astro` を編集してください。
* **画像最適化**: 読み込み速度向上のため、画像は可能な限りWebP形式、またはTinyPNG等で軽量化してから格納してください。

---

© PPC LP Factory. All Rights Reserved.
