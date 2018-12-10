import { fetch, baseUrl } from '../utils'
import { requestOperations } from '../state/ducks/request'
// const baseUrl = typeof document === 'undefined' ? 'http://localhost/antimage_api' : '/api'
function handleErrors(err, action, next) {
  next(requestOperations.reqFatal(err.message))

  return Promise.reject(err)
}

function handleResponse(res, action, next) {
  const code = parseInt(res.code, 10)
  switch (true) {
    case (code === 200):
      next(requestOperations.reqSuccess())
      next({
        type: `${action.type}_SUCCESS`,
        payload: res,
        meta: action.meta
      })
      break
    case (code >= 300 && code < 500):
      next(requestOperations.reqWarning(res.usrmsg))
      break
    case (code >= 500):
      next(requestOperations.reqFailed(res.usrmsg))
      break
    default:
      next(action)
      break
  }
  return res
}

const apiService = () => next => (action) => {
  const result = next(action)
  if (!action.meta) {
    return result
  }
  next(requestOperations.reqBegin(action.type))
  const { path, method = 'GET', body } = action.meta

  if (!path) {
    throw new Error(`'path' not specified for async action ${action.type}`)
  }

  const url = `${baseUrl}${path}`

  return fetch(url, method, body).then(
    res => handleResponse(res, action, next),
    err => handleErrors(err, action, next),
  )
}

export default apiService
