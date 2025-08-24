import { Api } from './fetchers'

const { instance: http, api } = new Api({
  baseURL: process.env.API_URL || 'https://lightblue2.store',
})

// JWT 토큰 자동 헤더 추가
http.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

// 401 에러 시 자동 로그아웃
http.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('accessToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export { http, api }
