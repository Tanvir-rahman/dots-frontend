import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import snakecaseKeys from 'snakecase-keys'
import camelcaseKeys from 'camelcase-keys'
import { getRefreshToken } from './auth'
import { Message } from 'element-ui'

const serviceWrapper = function(transform = true) {
  const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
  })

  service.interceptors.request.use(
    config => {
      const isRefreshUrl = config.url.includes('token/refresh')
      if (store.getters.token && !isRefreshUrl) {
        config.headers['Authorization'] = `Bearer ${getToken()}`
      }

      if (transform) {
        if (config.data) {
          config.data = snakecaseKeys(config.data)
        }

        if (config.params) {
          config.params = snakecaseKeys(config.params)
        }
      }
      return config
    },
    error => {
      console.error(error)
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    response => {
      if (transform) {
        return camelcaseKeys(response.data, { deep: true })
      }
      return response.data
    },
    async error => {
      console.log('' + error)
      const origRequest = error.config
      const response = error.response
      if (response.status === 401 && origRequest.url !== '/token') {
        if (origRequest.url.includes('token/refresh')) {
          console.log('Refresh has expired')
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        } else {
          console.log('Refreshing access token')
          const refreshData = await service.post('token/refresh', { refresh: getRefreshToken() })
          await store.dispatch('user/setToken', refreshData.access)
          return service(origRequest)
        }
      } else if (response.status === 401) {
        const message = response.data.detail
        Message.error(message)
      }
      return Promise.reject(error)
    }
  )
  return service
}

export default serviceWrapper
