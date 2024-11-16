// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  imports: { autoImport: true },
  typescript: {
    // 建議開發時維持 true，只在 generate 時暫時改為 false
    // typeCheck: process.env.NODE_ENV === 'development'
    typeCheck: false // 開發時開啟即時型別檢查
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon-tw'],
  css: ['~/assets/css/tailwind.css'],
  app: {
    // 設定 GitHub Pages 存放庫名稱
    baseURL: '/2024-NUXT-Task/',
    // 設置 active class
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  router: {
    options: {
      // 匹配到路由時添加 'active' class
      // 完全匹配時添加 'active-exact' class
      linkActiveClass: 'active',
      linkExactActiveClass: 'active-exact'
    }
  },
  runtimeConfig: {
    public: {
      hexSchoolApiUrl: 'https://nuxr3.zeabur.app'
    }
  },
  alias: {
    // 將 notfound.vue 設為預設的 404 頁面
    notfound: '~/pages/notfound.vue'
  }
})
