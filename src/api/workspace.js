import request from '@/utils/request'

export function getWorkspaces() {
  return request({
    url: '/workspace/',
    method: 'get'
  })
}

export function createWorkspace(data) {
  return request({
    url: '/workspace/',
    method: 'post',
    data
  })
}
