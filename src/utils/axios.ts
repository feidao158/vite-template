import axios from 'axios'

// 创建实例
const service = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 30000,
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
