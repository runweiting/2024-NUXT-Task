module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true
  },
  extends: ['@nuxt/eslint-config', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
