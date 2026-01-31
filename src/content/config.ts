import { defineCollection, z } from 'astro:content';

const lpsCollection = defineCollection({
  type: 'content', // Markdownを使用
  schema: z.object({
    title: z.string(), // ページタイトル
    description: z.string(), // meta description
    affiliateLink: z.string(), // ASPのアフィリエイトリンク
    primaryColor: z.string(), // メインカラー (例: #00C263)
    accentColor: z.string(), // アクセントカラー
    
    // 画像パス（public/assets/案件ID/ファイル名）
    images: z.object({
      mv: z.string(),
      pain: z.string(),
      comparison: z.string().optional(), // ない場合は省略可
    }),

    // LP上の文言
    texts: z.object({
      mvCatch: z.string(),
      mvSub: z.string(),
      buttonText: z.string(),
    }),
    
    // ターゲット条件（箇条書き用）
    targets: z.array(z.string()),
  }),
});

export const collections = {
  'lps': lpsCollection,
};