interface NewsData {
  _id: string
  title: string
  description: string
  image: string
  createdAt: string
  updatedAt: string
  altText?: string
}
interface ApiResponse {
  result: NewsData[]
}

export const useHome = () => {
  const runtimeConfig = useRuntimeConfig()
  const { hexSchoolApiUrl } = runtimeConfig.public

  const { data, status, error, refresh } = useFetch<ApiResponse>(
    `${hexSchoolApiUrl}/api/v1/home/news`,
    {
      transform: (data) => {
        return {
          ...data,
          result: data.result.map((news: NewsData) => ({
            ...news,
            createdAt: date2LocaleString(news.createdAt),
            updatedAt: date2LocaleString(news.updatedAt)
          }))
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
