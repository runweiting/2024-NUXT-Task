module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true
  },
  extends: ['@nuxt/eslint-config', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'no-undef': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'never']
  }
}
