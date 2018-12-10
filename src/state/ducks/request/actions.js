import * as types from './types'

export const reqBegin = reqType => ({
  type: types.REQUEST_BEGIN,
  payload: {
    reqType
  }
})

export const reqSuccess = (token) => {
  localStorage.setItem('token', token)
  return ({
    type: types.REQUEST_SUCCESS
  })
}

export const resetError = () => ({
  type: types.RESET_ERROR
})

export const reqWarning = warningMsg => ({
  type: types.REQUEST_WARNING,
  payload: {
    msg: warningMsg
  }
})

export const reqFailed = failedMsg => ({
  type: types.REQUEST_FAILED,
  payload: {
    msg: failedMsg
  }
})

export const reqFatal = fatalMsg => ({
  type: types.REQUEST_FATAL,
  payload: {
    msg: fatalMsg
  }
})
