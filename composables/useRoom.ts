import type { ApiDataResponse } from '~/types/api/ApiResponse'
import type { RoomType, useRoomReturn } from '~/types/RoomTypes'

export const useRoomType = (): useRoomReturn => {
  const runtimeConfig = useRuntimeConfig()
  const { hexSchoolApiUrl } = runtimeConfig.public
  const { data, status, error, refresh } = useFetch<ApiDataResponse<RoomType[]>>(
    `${hexSchoolApiUrl}/api/v1/rooms`,
    {
      transform: (data) => {
        if (!data.status) return data
        return {
          ...data,
          result: data.result.map((room: RoomType) => ({
            ...room,
            price: room.price.toLocaleString('zh-TW', {
              style: 'currency',
              currency: 'TWD',
              // 設定最少 0 位小數，最多 0 位小數
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }),
            createdAt: date2LocaleString(room.createdAt),
            updatedAt: date2LocaleString(room.updatedAt)
          }))
        }
      }
    }
  )
  const roomTypeList = computed(() => (data.value?.status ? data.value?.result : []))
  const hasError = computed(() => error.value !== null)
  const isLoading = computed(() => status.value === 'pending')
  const date2LocaleString = (date: string) => new Date(date).toLocaleDateString()
  return {
    roomTypeList,
    hasError,
    isLoading,
    refresh
  }
}
