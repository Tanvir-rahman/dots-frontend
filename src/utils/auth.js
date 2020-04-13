import Cookies from 'js-cookie'

const tokenKey = 'dots-token'
const refreshTokenKey = 'dots-refresh-token'

export function getToken() {
  return Cookies.get(tokenKey)
}

export function setToken(token) {
  return Cookies.set(tokenKey, token)
}

export function removeToken() {
  return Cookies.remove(tokenKey)
}

export function getRefreshToken() {
  return Cookies.get(refreshTokenKey)
}

export function setRefreshToken(token) {
  return Cookies.set(refreshTokenKey, token)
}

export function removeRefreshToken() {
  return Cookies.remove(refreshTokenKey)
}
