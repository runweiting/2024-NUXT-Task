import type { UseFetchOptions } from 'nuxt/app'

export interface DetailInfo {
  title: string
  isProvide: boolean
}

export interface RoomTypeApi {
  name: string
  description: string
  imageUrl: string
  imageUrlList: string[]
  areaInfo: string
  bedInfo: string
  maxPeople: number
  price: number
  formattedPrice?: string // 新增格式化的價格
  status: number
  layoutInfo: DetailInfo[]
  facilityInfo: DetailInfo[]
  amenityInfo: DetailInfo[]
  _id: string
  createdAt: string
  updatedAt: string
}

// composable response type
export interface UseRoomReturn {
  getRoomList: () => Promise<{
    roomTypeList: ComputedRef<RoomTypeApi[]> // 已經過處理的資料
    hasError: ComputedRef<boolean> // 錯誤狀態
    isLoading: ComputedRef<boolean> // 載入狀態
    refresh: () => Promise<void> // 重新載入方法
  }>
  getRoomInfo: (roomId: string) => Promise<{
    room: ComputedRef<RoomTypeApi>
    hasError: ComputedRef<boolean>
    isLoading: ComputedRef<boolean>
    refresh: (opts?: UseFetchOptions<unknown>) => Promise<void>
  }>
}
