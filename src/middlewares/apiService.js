import { fetch, baseUrl } from '../utils'
// const baseUrl = typeof document === 'undefined' ? 'http://localhost/antimage_api' : '/api'
function handleErrors(err, action, next) {
  next({
    type: `${action.type}_FATAL`,
    payload: err.message,
    meta: action.meta
  })

  return Promise.reject(err)
}

function handleResponse(res, action, next) {
  const code = parseInt(res.code, 10)
  let suffix = ''
  switch (true) {
    case (code === 200):
      suffix = 'COMPLETED'
      break
    case (code >= 300 && code < 500):
      suffix = 'WARNING'
      break
    case (code >= 500):
      suffix = 'FAILED'
      break
    default:
      suffix = 'FATAL'
      break
  }
  next({
    type: `${action.type}_${suffix}`,
    payload: res,
    meta: action.meta
  })
  return res
}

const apiService = () => next => (action) => {
  const result = next(action)
  if (!action.meta || !action.meta.async) {
    return result
  }
  const { path, method = 'GET', body } = action.meta

  if (!path) {
    throw new Error(`'path' not specified for async action ${action.type}`)
  }

  const url = `${baseUrl}${path}`

  return fetch(url, method, body).then(
    res => handleResponse(res, action, next),
    err => handleErrors(err, action, next)
  )
}

export default apiService
