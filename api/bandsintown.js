import request from 'superagent'

const apiBaseUrl = 'https://api.spacexdata.com/v3'

export function getCapsules() {
  return request.get(apiBaseUrl + '/capsules')
    .then(response => {
      const capsules = response.body
      return capsules
    })
}