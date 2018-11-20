import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../../utils'

/* State shape
{
    isAuthenticated: bool,
    redirectAfterLogin: string
}
*/
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const carrer = localStorage.getItem('carrer')

const logged = !!token && !!user && !!carrer

const authReducer = createReducer(logged)({
  [types.LOGIN_COMPLETED]: (state, action) => {
    const { code, content } = action.payload
    if (parseInt(code, 10) === 200) {
      localStorage.setItem('token', JSON.stringify(content.token))
      localStorage.setItem('user', JSON.stringify(content.data.admin))
      localStorage.setItem('carrer', JSON.stringify(content.data.carrer))
      return true
    }
    return false
  },
  [types.LOGOUT]: () => {
    localStorage.clear()
    return false
  },
  [types.LOGIN_WARNING]: () => {
    localStorage.clear()
    return false
  },
  [types.LOGIN_FAILED]: () => {
    localStorage.clear()
    return false
  },
  [types.LOGIN_FATAL]: () => {
    localStorage.clear()
    return false
  }
})
const defaultAdmin = {
  apellidos: '',
  correo: '',
  nombres: '',
  tipo: null
}
const adminReducer = createReducer(user ? JSON.parse(user) : defaultAdmin)({
  [types.LOGIN_COMPLETED]: (state, action) => {
    const { code, content } = action.payload
    return parseInt(code, 10) === 200 ? content.data.admin : defaultAdmin
  },
  [types.LOGOUT]: () => defaultAdmin
})
const defaultCarrer = {
  id: 0,
  nombre: '',
  urlLogo: '',
  descripcion: ''
}
const carrerReducer = createReducer(carrer ? JSON.parse(carrer) : defaultCarrer)({
  [types.LOGIN_COMPLETED]: (state, action) => {
    const { code, content } = action.payload
    return parseInt(code, 10) === 200 ? content.data.carrer : defaultCarrer
  },
  [types.LOGOUT]: () => defaultCarrer
})

export default combineReducers({
  admin: adminReducer,
  isAuthenticated: authReducer,
  carrer: carrerReducer
})
