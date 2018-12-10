import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../../utils'

/* State shape
{
  admin: {
    apellidos: '',
    correo: '',
    nombres: '',
    tipo: null
  },
  isAuthenticated: false,
  carrer: {
    id: 0,
    nombre: '',
    urlLogo: '',
    descripcion: ''
  }
}
*/
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const carrer = localStorage.getItem('carrer')

const logged = !!token && !!user && !!carrer

const authReducer = createReducer(logged)({
  [types.LOGIN_SUCCESS]: (state, action) => {
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
  }
})
const defaultAdmin = {
  apellidos: '',
  correo: '',
  nombres: '',
  tipo: null
}
const adminReducer = createReducer(user ? JSON.parse(user) : defaultAdmin)({
  [types.LOGIN_SUCCESS]: (state, action) => {
    const { code, content } = action.payload
    return parseInt(code, 10) === 200 ? content.data.admin : defaultAdmin
  },
  [types.LOGOUT]: () => defaultAdmin,
  [types.UPDATE_USER_SUCCESS]: (state, action) => action.payload.content.data
})
const defaultCarrer = {
  id: 0,
  nombre: '',
  urlLogo: '',
  descripcion: ''
}
const carrerReducer = createReducer(carrer ? JSON.parse(carrer) : defaultCarrer)({
  [types.LOGIN_SUCCESS]: (state, action) => {
    const { code, content } = action.payload
    return parseInt(code, 10) === 200 ? content.data.carrer : defaultCarrer
  },
  [types.LOGOUT]: () => defaultCarrer,
  [types.UPDATE_CARRER]: (state, action) => action.payload
})

export default combineReducers({
  admin: adminReducer,
  isAuthenticated: authReducer,
  carrer: carrerReducer
})
