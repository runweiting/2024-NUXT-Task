export interface BaseResponse {
  status: boolean
  token?: string
}

// 有資料回傳的 API 回應
export interface DataResponse<T> extends BaseResponse {
  status: true
  result: T
}

// 純狀態的 API 回應（例如登出、刪除等操作）
export interface StatusResponse extends BaseResponse {
  status: true
}

// 錯誤回應
export interface ErrorResponse extends BaseResponse {
  status: false
  message: string
}

// 根據 API 用途選擇對應的回應型別
export type ApiDataResponse<T> = DataResponse<T>
export type ApiStatusResponse = StatusResponse
