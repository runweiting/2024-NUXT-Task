/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  // 寫在 theme 直接覆蓋
  theme: {
    container: {
      center: true,
      padding: '12px'
    },
    // 寫在 extend 是擴充
    extend: {
      fontFamily: {
        sans: ['"Noto Sans TC"', ...defaultTheme.fontFamily.sans],
        // 添加本地字型
        elf: ['elffont-rock', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
