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
  [types.LOGIN_COMPLETED]: () => true,
  [types.LOGOUT]: () => false
})

const admin = createReducer({})({
  [types.LOGIN_COMPLETED]: (state, action) => {
    console.log(state, action)
    return action
  }
})

const redirectAfterLoginReducer = createReducer(null)({
  [types.SET_REDIRECT_AFTER_LOGIN]: (state, action) => action.payload.redirectUrl
})

export default combineReducers({
  admin,
  isAuthenticated: authReducer,
  redirectAfterLogin: redirectAfterLoginReducer
})
