import isomorphicFetch from 'isomorphic-fetch'

import { baseUrl } from './index'

function parseStatus(status, res) {
  return new Promise((resolve, reject) => {
    if (status >= 200 && status < 300) {
      res.then((response) => { resolve(response) })
    } else {
      res.then(response => reject({ status, response })) // eslint-disable-line
    }
  })
}

export default (url, data) => {
  const formData = new FormData()
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key])
  })
  const headers = {
    Authorization: localStorage.getItem('token')
  }
  const options = {
    method: 'POST',
    headers,
    body: formData
  }
  return isomorphicFetch(baseUrl + url, options)
    .then(res => parseStatus(res.status, res.json()))
}
