// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    // 建議開發時維持 true，只在 generate 時暫時改為 false
    // typeCheck: process.env.NODE_ENV === 'development'
    typeCheck: false // 開發時開啟即時型別檢查
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  app: {
    baseURL: '/2024-NUXT-Task/' // 設定 GitHub Pages 存放庫名稱
  },
  runtimeConfig: {
    public: {
      hexSchoolApiUrl: 'https://nuxr3.zeabur.app'
    }
  }
})
