# 🩺 看護師 Support.com LP Project

このプロジェクトは、看護師転職市場で利益を最大化するための比較型LP**「看護師 Support.com」**のリポジトリです。
**Astro v5** と **Tailwind CSS v4** を採用し、広告運用（PPC）において最重要指標である「ページ表示速度（LCP）」と「成約率（CVR）」を極限まで追求した設計になっています。

## 🛠 技術スタック

- **Framework**: [Astro](https://astro.build) (v5) - 静的生成(SSG)による爆速表示
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4) - メンテナンス性の高いスタイリング
- **UI Library**: [Swiper](https://swiperjs.com/) (求人スライダー・口コミ用)
- **Infrastructure**: **Mixhost (Litespeed Web Server)**
- **Deployment**: **手動ビルド ➔ FTPアップロード**

## 📚 運用・戦略マニュアル

サイトの更新手順やPPC運用のレギュレーションについては、以下のドキュメントを確認してください。
特に**「案件の提携解除」を防ぐためのPR表記**や**正確な求人数データ**の更新日は、広告出稿前に必ずチェックすること。

- [📖 看護師 Support.com サイト運用・更新マニュアル]()

## 🚀 プロジェクト構造

PPCのABテスト（訴求文やボタン色の変更）を行う際は、主に `src/pages/index.astro` を編集します。

```text
/
├── public/
│   └── assets/
│       └── images/      # 🖼️ 画像ファイル（WebP形式を強く推奨）
├── src/
│   ├── layouts/
│   │   └── Layout.astro # 📐 共通レイアウト（GTM/タグマネージャーはここ）
│   ├── pages/
│   │   ├── index.astro  # 🏠 LPメインコンテンツ（比較表・ボタンの修正はここ）
│   │   ├── company.astro
│   │   └── privacy.astro
│   └── styles/
│       └── global.css   # 🎨 Tailwind v4設定（ブランドカラーはここ）
├── astro.config.mjs     # ⚙️ Astro設定
└── package.json
```

## 🧞 コマンド一覧

ターミナルで以下のコマンドを実行して開発・ビルドを行います。

| コマンド          | 説明                                                                               |
| :---------------- | :--------------------------------------------------------------------------------- |
| `npm install`     | **最初のみ実行**。依存関係（node_modules）をインストールします。                   |
| `npm run dev`     | **開発用サーバー起動**。`http://localhost:4321` でプレビューしながら編集できます。 |
| `npm run build`   | **本番用ビルド**。`dist/` フォルダに公開用ファイルを生成します。                   |
| `npm run preview` | ビルドされた `dist/` の内容をローカルで確認します。                                |

## 📦 デプロイ手順

MixhostはGit連携による自動デプロイではないため、以下の手順で手動反映を行います。

本番ビルドの実行: ターミナルで npm run build を実行します。

アップロードファイルの確認: 生成された dist/ フォルダの中身が最新であることを確認します。

FTPアップロード: FileZilla等のFTPソフトまたはMixhostのcPanel内「ファイルマネージャー」を使用し、dist/ 内の全ファイルを公開ディレクトリ（public_html/等）へアップロードします。

キャッシュクリアについて Mixhost（LiteSpeedサーバー）はキャッシュが強力です。アップロード後は、cPanelから「LiteSpeed Web Cache Manager」を開き、必ず**Flush LSCache（全キャッシュクリア）**を実行してください。修正が反映されない原因の9割はこれです。

## 📝 運用メモ
- **画像パス**: 必ず /assets/images/filename の形式で記述。
- **広告計測**: CVタグやGTMは Layout.astro の <head> 内に設置済み。
- **モバイルファースト**: 看護師ユーザーの9割はスマホ閲覧です。開発時は常にデベロッパーツールでSP表示を基準に調整してください。
- **損切り基準**: 25クリックされて1件も発生（CV）しない場合は、LPのFV（ファーストビュー）訴求の変更を検討すること。

---

© 2026 看護師 Support.com. All Rights Reserved.
