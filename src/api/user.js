import request from '@/utils/request'

export function login(data) {
  return request()({
    url: '/token',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request()({
    url: '/user',
    method: 'get'
  })
}

export function register(data) {
  return request()({
    url: '/user/register',
    method: 'post',
    data
  })
}
