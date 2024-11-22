// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1. 基礎與兼容性配置
  compatibilityDate: '2024-04-03',
  // 2. 開發工具
  devtools: { enabled: true },
  // 3. 類型檢查
  typescript: {
    // 建議開發時維持 true，只在 generate 時暫時改為 false
    // typeCheck: process.env.NODE_ENV === 'development'
    typeCheck: false // 開發時開啟即時型別檢查
  },
  // 4. 導入配置
  imports: { dirs: ['stores'] },
  // 5. 別名配置
  alias: {
    // 將 notfound.vue 設為預設的 404 頁面
    notfound: '~/pages/notfound.vue'
  },
  // 6. CSS 樣式
  css: ['~/assets/css/tailwind.css', 'sweetalert2/dist/sweetalert2.min.css'],
  // 7. 模組配置
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon-tw',
    ['@vee-validate/nuxt', { autoImports: true }]
  ],
  // 8. 應用配置
  app: {
    // 設定 GitHub Pages 存放庫名稱
    baseURL: '/2024-NUXT-Task/',
    buildAssetsDir: 'assets',
    // 設置頁面轉場效果
    pageTransition: { name: 'page', mode: 'out-in' },
    // 全站基礎設定
    head: {
      htmlAttrs: {
        lang: 'zh-TW'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'HexHotel | 六角飯店',
      // 全站預設 meta 標籤
      meta: [
        // 安全性和性能相關 meta
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }, // 告訴 IE 使用 edge
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' }, // 防止瀏覽器猜測 MIME 類型
        { 'http-equiv': 'Cache-control', content: 'public, max-age=604800' },

        // SEO 相關
        {
          name: 'description',
          content:
            '六角飯店位於高雄，提供頂級的住宿體驗。享受絕美市景與高級設施，讓您的每一刻都充滿奢華與舒適。立即預訂，開啟難忘的住宿之旅！'
        },
        {
          name: 'keywords',
          content: 'HexHotel,HexHotel 訂房,高雄旅遊,訂房,住宿,住宿預訂,四人房,雙人房,景觀房'
        },
        { name: 'author', content: '六角飯店' }, // 指定網頁的作者或擁有者
        { name: 'robots', content: 'index, follow' }, // 可以索引頁面和跟隨連結

        // Open Graph 標籤
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '頂級的住宿體驗 | 六角飯店' },
        {
          property: 'og:description',
          content:
            '六角飯店位於高雄，提供頂級的住宿體驗。享受絕美市景與高級設施，讓您的每一刻都充滿奢華與舒適。立即預訂，開啟難忘的住宿之旅！你。'
        },
        { property: 'og:url', content: 'http://localhost:3000/' },
        {
          property: 'og:image',
          content: ''
        },
        { property: 'og:site_name', content: '六角飯店' },
        { property: 'og:locale', content: 'zh_TW' },
        { property: 'fb:app_id', content: '' },

        // 自定義 meta（日曆 ID 和 key）
        {
          name: 'calendar-id',
          content: ''
        },
        { name: 'calendar-key', content: '' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }, // 設定網站圖示，顯示在瀏覽器分頁和書籤中
        // canonical 指定頁面的標準 URL，避免重複內容問題
        { rel: 'canonical', href: '' }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/sweetalert2@11',
          type: 'text/javascript',
          defer: true,
          tagPosition: 'head'
        }
      ],
      // 渲染 <noscript>此網頁需要支援 JavaScript 才能正確運行，請先至你的瀏覽器設定中開啟 JavaScript。</noscript>
      noscript: [
        {
          children:
            '此網頁需要支援 JavaScript 才能正確運行，請先至你的瀏覽器設定中開啟 JavaScript。'
        }
      ]
    }
  },
  // 9. 路由規則：沒有配置到的路由是 SSR
  /* SWR（Stale-While-Revalidate）是一種 HTTP 快取策略其核心概念是先返回快取資料，並在背景中驗證快取資料是否過期，如果過期則重新抓取資料並更新快取。使用者在瀏覽網頁時，會直接取得快取資料，避免等待伺服器渲染與回應的時間，提升效能和使用者體驗。
  routeRules: { '/articles/*': { swr: 3600 }}
  此設定表示 /articles/* 採用 swr 策略，swr: 3600 表示快取的有效時間為 3600 秒（1 小時）。伺服器端回應的 Cache-Control 標頭會包含以下內容：
  s-maxage=3600：指定 3600 秒內（即一小時），相同的請求會直接從快取中獲取資料，而不會去檢查後端是否有更新。
  stale-while-revalidate：在 3600 秒後，允許繼續使用舊快取來回應請求，同時在背景中發送請求去更新快取。 */

  /* ISR（Incremental Static Regeneration） 是一種結合 SSG 和 SSR 優勢的渲染策略，在頁面第一次生成後提供 SSG 的靜態加載速度，同時透過定時再渲染 SSR 更新內容，而不需要整站重新構建，達到快速響應和定時更新的平衡。
  例如，網站中的 /top100-products 頁面用來顯示前 100 名熱門商品的排名，這些排名隨銷量變化更新。如果只使用 SSG，無法即時反映最新排名；若使用 SSR，每次請求都需伺服器重新渲染，會影響效能。
  routeRules: { '/top100-products': { isr: 1800 } }
  此設定表示 /top100-products 採用 isr 策略，isr: 1800 表示每隔 30 分鐘重新渲染一次靜態頁面，使用者在訪問時，能快速載入靜態頁面，並在背景中由伺服器更新內容，下一次請求即能獲取更新的資料。 */

  /* === 如果希望頁面始終是最新資料，則使用伺服器端渲染 SSR，來即時渲染  ===
  例如，你希望頁面擁有如靜態頁面的載入速度，又能保持渲染新的動態資料，你選擇了使用 SWR 或 ISR，但當使用者瀏覽了這些網頁，看到的可能會是快取中的舊資料，因為首次觸發檢查就算有了新資料，也只會先更新在快取之中，只有使用者再次重新整理頁面，才會拿到上一次的新資料做渲染與再次驗證。 */

  /* 如何判斷 SWR 與 ISR 的使用時機？
  選擇 SWR 還是 ISR，主要取決於以下幾個因素：
  1. 資料更新的頻率
    SWR：適用於短時間內可能頻繁更新的資料，但即使使用者暫時看到舊資料也無大礙。SWR 在背景更新，允許使用舊資料以提升效能，並最終提供最新資料。例如：熱門商品列表、新聞、商品庫存數量更新
    ISR：適用於定期更新的資料，且使用者需看到更新後內容。ISR 定期重新生成頁面，適合資料更新頻率較低，但需一定新鮮度的情境。例如：每日新聞摘要、每月更新的排行榜、每小時更新的熱門商品列表、靜態產品頁面
  2. 資料變更的即時性要求
    SWR：資料可接受在一段時間內不是最新的情況。使用者初次請求會看到快取資料，但後續請求會更新為最新資料。
    ISR：定時重新渲染，能確保在特定時間後，資料保持較新，但並非立即更新。
  3. 效能需求
    SWR：適合高流量情境，因為快取的靜態頁面可以有效降低伺服器壓力。
    ISR：適合中等流量，因為生成靜態頁面仍需要後端處理，且背景再生成也會消耗資源。 */

  routeRules: {
    '/': { prerender: true }, // 首頁在建構打包時預渲染
    '/admin/**': { ssr: false }, // 管理頁面，只需要在客戶端進行渲染 CSR
    '/register/**': { ssr: false },
    '/articles/**': { swr: 3600 }, // 過期時間為 1 小時
    '/products/**': { swr: 600 }, // 過期時間為 10 分鐘
    '/rooms/**': { isr: 3600 }, // 過期時間為 1 小時
    '/top100-products': { isr: 3600 }, // Top 100 產品頁面，過期時間為 1 小時
    '/static': { isr: true } // 靜態頁面，只產生一次，直到下次部署才重新產生
  },
  // 10. 路由選項
  router: {
    options: {
      // 匹配到路由時添加 'active' class
      // 完全匹配時添加 'active-exact' class
      linkActiveClass: 'active',
      linkExactActiveClass: 'active-exact'
    }
  },
  // 11. Nitro 配置
  nitro: {
    preset: 'github-pages'
  },
  // 12. 運行時配置
  runtimeConfig: {
    public: {
      hexSchoolApiUrl: 'https://nuxr3.zeabur.app'
    }
  }
})
