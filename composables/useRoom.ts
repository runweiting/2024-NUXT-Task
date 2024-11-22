import type { ApiDataResponse } from '~/types/api/ApiResponse'
import type { RoomTypeApi, useRoomReturn } from '~/types/RoomTypes'

export const useRoom = (): useRoomReturn => {
  const runtimeConfig = useRuntimeConfig()
  const { hexSchoolApiUrl } = runtimeConfig.public

  // 定義預設 room
  const defaultRoom: RoomTypeApi = {
    name: '',
    description: '',
    imageUrl: '',
    imageUrlList: [],
    areaInfo: '',
    bedInfo: '',
    maxPeople: 0,
    price: 0,
    formattedPrice: '',
    status: 0,
    layoutInfo: [],
    facilityInfo: [],
    amenityInfo: [],
    _id: '',
    createdAt: '',
    updatedAt: ''
  }
  // 共用的日期轉換函式
  const date2LocaleString = (date: string) => new Date(date).toLocaleDateString()
  // 共用的價格轉換函式
  const formatPrice = (price: number): string => {
    return price.toLocaleString('zh-TW', {
      style: 'currency',
      currency: 'TWD',
      // 設定最少 0 位小數，最多 0 位小數
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
  }

  const getRoomList = async () => {
    const { data, status, error, refresh } = await useFetch<ApiDataResponse<RoomTypeApi[]>>(
      `${hexSchoolApiUrl}/api/v1/rooms`,
      {
        transform: (data) => {
          if (!data.status) return data
          return {
            ...data,
            result: data.result.map((room: RoomTypeApi) => ({
              ...room,
              formattedPrice: formatPrice(room.price),
              createdAt: date2LocaleString(room.createdAt),
              updatedAt: date2LocaleString(room.updatedAt)
            }))
          }
        }
      }
    )
    const roomTypeList = computed<RoomTypeApi[]>(() =>
      data.value?.status ? data.value?.result : []
    )
    const hasError = computed(() => error.value !== null)
    const isLoading = computed(() => status.value === 'pending')

    return {
      roomTypeList,
      hasError,
      isLoading,
      refresh
    }
  }
  const getRoomInfo = async (roomId: string) => {
    const { data, status, error, refresh } = useFetch<ApiDataResponse<RoomTypeApi>>(
      `${hexSchoolApiUrl}/api/v1/rooms/${roomId}`,
      {
        transform: (data) => {
          if (!data.status) return data
          const room = data.result
          return {
            ...data,
            result: {
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
            }
          }
        }
      }
    )
    const room = computed<RoomTypeFormatted[]>(() =>
      data.value?.status ? data.value?.result : defaultRoom
    )
    const hasError = computed(() => error.value !== null)
    const isLoading = computed(() => status.value === 'pending')
    const date2LocaleString = (date: string) => new Date(date).toLocaleDateString()
  }

  return {
    getRoomList,
    getRoomInfo
  }
}
