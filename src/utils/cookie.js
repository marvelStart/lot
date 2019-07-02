import Cookies from 'js-cookie'

export const getToken = () => {
  return Cookies.getItem('Authorization')
}

export const getUserId = () => {
  return Cookies.getItem('AuthorizationId')
}

export const setToken = (token, id) => {
  Cookies.setItem('Authorization', token)
  Cookies.setItem('AuthorizationId', id)
}
