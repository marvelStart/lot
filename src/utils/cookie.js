import Cookies from 'js-cookie'

export const getToken = () => {
  return Cookies.get('Authorization')
}

export const getUserId = () => {
  return Cookies.get('AuthorizationId')
}

export const setToken = (token, id) => {
  Cookies.set('Authorization', token, { expires: 1 })
  Cookies.set('AuthorizationId', id, { expires: 1 })
}
