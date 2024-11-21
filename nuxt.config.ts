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
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/sweetalert2@11',
          type: 'text/javascript',
          defer: true
        }
      ]
    }
  },
  // 9. 路由規則
  routeRules: {
    // 禁用特定路由的預渲染
    '/register/**': { ssr: false }
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
