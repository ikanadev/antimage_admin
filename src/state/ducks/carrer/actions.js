import * as types from './types'

export const updateCarrerSuccess = () => ({
  type: types.UPDATE_CARRER_DATA_COMPLETED
})

export const updateCarrer = () => ({
  type: types.UPDATE_CARRER_DATA
})

export const setWarningError = warning => ({
  type: types.UPDATE_CARRER_DATA_WARNING,
  payload: warning
})

export const setFailedError = error => ({
  type: types.UPDATE_CARRER_DATA_FAILED,
  payload: error
})

export const setFatalError = error => ({
  type: types.UPDATE_CARRER_DATA_FATAL,
  payload: error
})

export const resetError = () => ({
  type: types.RESET_ERROR
})
