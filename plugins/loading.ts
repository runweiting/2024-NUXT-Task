// 利用 loading 全域插件，來監控路由導航並觸發 isLoading 的更新

export default defineNuxtPlugin((nuxtApp) => {
  // ===== 設定 throttleTimer 機制  =====
  const isLoading = ref<boolean>(false)
  let throttleTimer: NodeJS.Timeout | null = null

  // 改為 0，讓 loading 立即顯示
  const throttleTime: number = 0
  // 延遲 800ms，確保 loading 效果可見
  const holdTime: number = 2000

  // 如果 throttleTimer 還沒執行完，先移除 throttleTimer
  function clearThrottle() {
    if (throttleTimer) {
      clearTimeout(throttleTimer)
      throttleTimer = null
    }
  }

  // 設定立即顯示 loading
  function showLoading() {
    clearThrottle()
    throttleTimer = setTimeout(() => {
      isLoading.value = true
    }, throttleTime)
  }

  function hideLoading() {
    clearThrottle()
    setTimeout(() => {
      isLoading.value = false
    }, holdTime)
  }

  // ===== 設定 router 監控路由導航 =====
  const router = useRouter()

  // 確保在路由變化時能夠捕獲到事件
  router.beforeEach((_to, _from, next) => {
    showLoading()
    next()
  })

  router.afterEach(() => {
    hideLoading()
  })

  router.onError(() => {
    hideLoading()
  })

  return {
    provide: {
      loadingState: readonly(isLoading)
    }
  }
})
