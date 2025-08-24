'use client'

import { api } from './http'
import type { LoginRequest, RegisterRequest } from './fetchers'

export class AuthActions {
  /**
   * 사용자 로그인
   */
  static async login(credentials: LoginRequest) {
    try {
      const response = await api.login(credentials)

      if (response.data?.token) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('accessToken', response.data.token)
        }
        return { success: true, token: response.data.token }
      }

      return { success: false, error: '토큰을 받지 못했습니다.' }
    } catch (error: unknown) {
      return { success: false, error: error as Error }
    }
  }

  /**
   * 사용자 회원가입
   */
  static async register(userData: RegisterRequest) {
    try {
      const response = await api.register(userData)

      if (response.data?.token) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('accessToken', response.data.token)
        }
        return { success: true, token: response.data.token }
      }

      return { success: false, error: '토큰을 받지 못했습니다.' }
    } catch (error: unknown) {
      return { success: false, error: error as Error }
    }
  }

  /**
   * 사용자 로그아웃
   */
  static logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken')
    }
  }

  /**
   * 현재 토큰 확인
   */
  static getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('accessToken')
    }
    return null
  }

  /**
   * 로그인 상태 확인
   */
  static isLogin() {
    return !!this.getToken()
  }
}
