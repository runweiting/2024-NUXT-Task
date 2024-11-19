export interface UserAddress {
  zipcode: number
  detail: string
  city?: string
  county?: string
}

export interface BaseUserInfo {
  _id: string
  id: string
  name: string
  email: string
  phone: string
  birthday: string
  address: UserAddress
  createdAt: string
  updatedAt: string
}

export interface UserSignin {
  email: string
  password: string
}

export interface UserSignup extends UserSignin {
  name: string
  phone: string
  birthday: string
  address: UserAddress
}

export interface UserForgot {
  email: string
  code: string
  newPassword: string
}

export interface PutUser {
  userId: string
  name: string
  phone: string
  birthday: string
  address: UserAddress
  oldPassword: string
  newPassword: string
}
