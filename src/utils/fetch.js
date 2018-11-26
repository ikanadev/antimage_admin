import isomorphicFetch from 'isomorphic-fetch'

function parseStatus(status, res) {
  return new Promise((resolve, reject) => {
    if (status >= 200 && status < 300) {
      res.then((response) => { resolve(response) })
    } else {
      res.then(response => reject({ status, response })) // eslint-disable-line
    }
  })
}

function requestHeaders(url) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  if (url.indexOf('login') >= 0) {
    return headers
  }
  return Object.assign(headers, {
    Authorization: localStorage.getItem('token')
  })
}

export default (url, method, body) => {
  const options = {
    method,
    headers: requestHeaders(url),
    body: method !== 'GET' ? JSON.stringify(body) : null
  }

  return isomorphicFetch(url, options)
    .then(res => parseStatus(res.status, res.json()))
}
