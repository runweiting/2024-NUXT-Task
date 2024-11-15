export interface RoomInfo {
  title: string
  isProvide: boolean
}

export interface RoomType {
  name: string
  description: string
  imageUrl: string
  imageUrlList: string[]
  areaInfo: string
  bedInfo: string
  maxPeople: number
  price: number | string
  status: number
  layoutInfo: RoomInfo[]
  facilityInfo: RoomInfo[]
  amenityInfo: RoomInfo[]
  _id: string
  createdAt: string
  updatedAt: string
}

export interface useRoomReturn {
  roomTypeList: ComputedRef<RoomType[]>
  hasError: ComputedRef<boolean>
  isLoading: ComputedRef<boolean>
  refresh: () => Promise<void>
}
