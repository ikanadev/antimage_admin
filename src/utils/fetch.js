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

function requestHeaders(url, token, type) {
  let headers = {}
  if (type === 'json') {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
  if (!token) {
    return headers
  }
  return Object.assign(headers, {
    Authorization: localStorage.getItem('token')
  })
}

export default (url, method, body, token, type) => {
  let data
  if (type === 'json') {
    data = JSON.stringify(body)
  }
  if (type === 'file') {
    data = new FormData()
    Object.keys(body).forEach((key) => {
      data.append(key, body[key])
    })
  }
  const options = {
    method,
    headers: requestHeaders(url, token, type),
    body: method !== 'GET' ? data : null
  }

  return isomorphicFetch(url, options)
    .then(res => parseStatus(res.status, res.json()))
}
