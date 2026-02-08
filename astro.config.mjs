import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 1. 本番ドメイン
  site: 'https://match-box.net', 
  
  // 2. ルート運用なので '/' （または記述なしでOK）
  base: '/', 

  output: "static",
  
  // 3. URLの末尾スラッシュを付ける設定（現在の運用に合わせる）
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
    // build: { rollupOptions: { ... } } は削除してOK！
    // Astroの標準の最適化エンジンがフル稼働します。
  },
});