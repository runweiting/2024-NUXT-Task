import axios, { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import type { ApiDataResponse, ApiStatusResponse, ErrorResponse } from '~/types/api/ApiResponse'
import type { BaseUserInfo, UserSignup } from '@/types/User'

export const useUserStore = defineStore('user', () => {
  const { successToast, warningToast, errorToast } = useSweetAlert()

  // 定義狀態
  const userState = reactive<{
    data: {}
    error: string | null
    isLoading: boolean
  }>({
    data: {},
    error: null,
    isLoading: false
  })

  // 處理錯誤
  const handleError = (err: AxiosError<ErrorResponse>) => {
    const errorMessage = err.response?.data?.message || '發生未知錯誤'
    const errorCode = err.response?.status
    userState.error = errorMessage
    errorToast(errorMessage)
    console.error({
      message: errorMessage,
      statusCode: errorCode,
      stack: err.stack
    })
  }

  const signup = async (payload: UserSignup): Promise<void> => {
    userState.isLoading = true
    try {
      const res = await axios.post<ApiDataResponse<BaseUserInfo>>('/api/v1/user/signup', payload)
      userState.data = res.data.result
      successToast('註冊成功')
    } catch (err: any) {
      handleError(err)
    } finally {
      userState.isLoading = false
    }
  }

  return {
    signup,
    isLoading: userState.isLoading
  }
})
