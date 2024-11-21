<script setup lang="ts">
import { useSignupForm } from '~/composables/useSignupForm'

const {
  signupName,
  signupEmail,
  signupPassword,
  signupPhone,
  birthday,
  zipcode,
  cityArea,
  detail,
  signupErrors,
  handleSignup
} = useSignupForm()
const userStore = useUserStore()
</script>

<template>
  <div class="max-w-md">
    <form class="grid grid-cols-1 gap-6" @submit.prevent="handleSignup">
      <fieldset>
        <legend id="signupNameLegend" class="flex items-start">
          姓名
          <Icon class="m-1 h-2 w-2 text-red-500" name="mdi:required" />
        </legend>
        <FormsInputField
          id="signupName"
          v-model="signupName"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="請輸入姓名"
          aria-describedby="signupNameLegend"
          autocomplete="off"
          :disabled="userStore.isLoading"
        />
        <FormsErrorMessage :msg="signupErrors.signupName" />
      </fieldset>
      <fieldset>
        <legend id="signupEmailLegend" class="flex items-start">
          信箱
          <Icon class="m-1 h-2 w-2 text-red-500" name="mdi:required" />
        </legend>
        <FormsInputField
          id="signupEmail"
          v-model="signupEmail"
          type="email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="請輸入name@example.com"
          aria-describedby="signupEmailLegend"
          autocomplete="off"
          :disabled="userStore.isLoading"
        />
        <FormsErrorMessage :msg="signupErrors.signupEmail" />
      </fieldset>
      <fieldset>
        <legend id="signupPasswordLegend" class="flex items-start">
          密碼
          <Icon class="m-1 h-2 w-2 text-red-500" name="mdi:required" />
        </legend>
        <FormsInputField
          id="signupPassword"
          v-model="signupPassword"
          type="password"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="請輸入密碼"
          aria-describedby="signupPasswordLegend"
          autocomplete="off"
          :disabled="userStore.isLoading"
        />
        <FormsErrorMessage :msg="signupErrors.signupPassword" />
      </fieldset>
      <fieldset>
        <legend id="signupPhoneLegend" class="flex items-start">
          電話
          <Icon class="m-1 h-2 w-2 text-red-500" name="mdi:required" />
        </legend>
        <FormsInputField
          id="signupPhone"
          v-model="signupPhone"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="請輸入電話"
          aria-describedby="signupPhoneLegend"
          autocomplete="off"
          :disabled="userStore.isLoading"
        />
        <FormsErrorMessage :msg="signupErrors.signupPhone" />
      </fieldset>
      <fieldset>
        <legend id="signupBirthdayLegend" class="flex items-start">
          出生年月日
          <Icon class="m-1 h-2 w-2 text-red-500" name="mdi:required" />
        </legend>
        <FormsInputField
          id="signupBirthday"
          v-model="birthday"
          type="date"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="請輸入生日"
          aria-describedby="signupBirthdayLegend"
          autocomplete="off"
          :disabled="userStore.isLoading"
        />
        <FormsErrorMessage :msg="signupErrors.birthday" />
      </fieldset>
      <div class="grid grid-cols-3 gap-2">
        <fieldset>
          <legend id="signupZipCodeLegend" class="flex items-start">
            郵遞區號
            <Icon class="m-1 h-2 w-2 text-red-500" name="mdi:required" />
          </legend>
          <FormsInputField
            id="signupZipCode"
            v-model="zipcode"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="請輸入 3 碼郵遞區號"
            aria-describedby="signupZipCodeLegend"
            autocomplete="off"
            :disabled="userStore.isLoading"
          />
          <FormsErrorMessage :msg="signupErrors.zipcode" />
        </fieldset>
        <fieldset>
          <legend id="signupCityAreaLegend" class="flex items-start">
            城市及區域
            <Icon class="m-1 h-2 w-2 text-red-500" name="mdi:required" />
          </legend>
          <FormsInputField
            id="signupCityArea"
            v-model="cityArea"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="自動填入城市及區域"
            aria-describedby="signupCityAreaLegend"
            autocomplete="off"
            :disabled="userStore.isLoading"
            readonly
          />
        </fieldset>
        <fieldset>
          <legend id="signupAddressLegend" class="flex items-start">
            地址
            <Icon class="m-1 h-2 w-2 text-red-500" name="mdi:required" />
          </legend>
          <FormsInputField
            id="signupAddress"
            v-model="detail"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="請輸入地址"
            aria-describedby="signupAddressLegend"
            autocomplete="off"
            :disabled="userStore.isLoading"
          />
          <FormsErrorMessage :msg="signupErrors.detail" />
        </fieldset>
      </div>
      <button type="submit" class="btn" :disabled="userStore.isLoading">註冊</button>
    </form>
  </div>
</template>

<style scoped></style>
