import { Api } from './fetchers'

const { instance: http, api } = new Api({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  // @MEMO: axios 추가설정할거 있으면 추가
})

export { http, api }
