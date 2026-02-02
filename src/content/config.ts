import { defineCollection, z } from 'astro:content';

const lps = defineCollection({
  schema: z.object({
    // --- 1. 基本設定 ---
    // テンプレート指定（pera:ペラ, single:単一悩み, comparison:比較）
    // 指定がない場合は 'single' (単一型) として扱います
    template: z.enum(['pera', 'single', 'comparison']).default('single'),
    mermaidCode: z.string().optional(),
    
    // レイアウトファイル指定（Frontmatterで指定がある場合用）
    layout: z.string().optional(),
    
    // --- 2. メタデータ (必須) ---
    title: z.string(),
    description: z.string(),
    
    // 案件リンク (ペラサイトでは必須級だが、比較サイトでは個別項目にあるため任意に)
    affiliateLink: z.string().optional(),

    // --- 3. デザイン設定 (任意: 指定なければデフォルト値使用) ---
    primaryColor: z.string().default('#0F4C81'), // メインカラー
    accentColor: z.string().default('#F5A623'),  // アクセントカラー

    // --- 4. 画像設定 ---
    images: z.object({
      mv: z.string(), // メインビジュアルは必須
      pain: z.string().optional(),      // 悩み画像 (ペラでは不要)
      solution: z.string().optional(),  // 解決策画像 (ペラでは不要)
      comparison: z.string().optional(),// 比較図 (任意)
    }).optional(), // images自体がない場合も考慮

    // --- 5. テキスト設定 ---
    texts: z.object({
      mvCatch: z.string().optional(),   // MVキャッチコピー
      mvSub: z.string().optional(),     // MVサブコピー
      buttonText: z.string().default('公式サイトを見る'), // ボタン文言
    }).optional(),

    // --- 6. 単一型LP用データ (任意) ---
    targets: z.array(z.string()).optional(), // 「こんな方におすすめ」リスト

    // --- 7. 比較型LP用データ (任意) ---
    rankings: z.array(z.object({
      rank: z.number(),         // 1, 2, 3...
      name: z.string(),         // サービス名
      rate: z.number(),         // 評価 (例: 4.5)
      points: z.array(z.string()), // おすすめポイントの配列
      link: z.string(),         // その案件のアフィリエイトリンク
      badge: z.string().optional(), // "1位", "高還元" などのバッジ
      image: z.string().optional(), // ロゴ画像などがあれば
    })).optional(),
  }),
});

export const collections = { lps };