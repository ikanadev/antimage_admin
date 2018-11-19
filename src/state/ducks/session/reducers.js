import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../../utils'

/* State shape
{
    isAuthenticated: bool,
    redirectAfterLogin: string
}
*/

const authReducer = createReducer(false)({
  [types.LOGIN_COMPLETED]: (state, action) => (
    action.payload.code >= 200 && action.payload.code < 300
  ),
  [types.LOGOUT]: () => false
})
const defaultAdmin = {
  apellidos: 'User',
  correo: 'admin@user.com',
  nombres: 'User',
  tipo: null
}
const adminReducer = createReducer(defaultAdmin)({
  [types.LOGIN_COMPLETED]: (state, action) => {
    const { code, content } = action.payload
    if (code >= 200 && code < 300) {
      return content.data.admin
    }
    return defaultAdmin
  }
})

const redirectAfterLoginReducer = createReducer(null)({
  [types.SET_REDIRECT_AFTER_LOGIN]: (state, action) => action.payload.redirectUrl
})

export default combineReducers({
  admin: adminReducer,
  isAuthenticated: authReducer,
  redirectAfterLogin: redirectAfterLoginReducer
})
