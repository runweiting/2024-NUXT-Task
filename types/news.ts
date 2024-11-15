export interface NewsData {
  _id: string
  title: string
  description: string
  image: string
  createdAt: string
  updatedAt: string
  altText?: string
}

export interface UseHomeReturn {
  newsList: ComputedRef<NewsData[]>
  hasError: ComputedRef<boolean>
  isLoading: ComputedRef<boolean>
  refresh: () => Promise<void>
}
