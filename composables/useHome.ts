import type { ApiResponse } from '~/types/api/ApiResponse'
import type { NewsData, UseHomeReturn } from '~/types/news'

export const useHome = (): UseHomeReturn => {
  const runtimeConfig = useRuntimeConfig()
  const { hexSchoolApiUrl } = runtimeConfig.public

  const { data, status, error, refresh } = useFetch<ApiResponse<NewsData[]>>(
    `${hexSchoolApiUrl}/api/v1/home/news`,
    {
      transform: (data) => {
        return {
          ...data, // 原始 data
          result: data.result.map((news: NewsData) => ({
            ...news,
            createdAt: date2LocaleString(news.createdAt),
            updatedAt: date2LocaleString(news.updatedAt)
          })) // 將原始 data.result 進行格式化，返回更新後的 result
        }
      }
    }
  )
  const newsList = computed(() => data.value?.result || [])
  const hasError = computed(() => error.value !== null)
  const isLoading = computed(() => status.value === 'pending')
  const date2LocaleString = (date: string) => new Date(date).toLocaleDateString()
  return {
    newsList,
    hasError,
    isLoading,
    refresh
  }
}
