import { combineReducers } from 'redux'
import loginReducer from './views/Login/duck'

const rootReducer = combineReducers({
  login: loginReducer
})
export default rootReducer
