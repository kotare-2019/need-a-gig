import request from 'superagent'

const apiBaseUrl = 'https://rest.bandsintown.com/'

export function artistEvents(artistName) {
  return request.get('/api/bands/' + artistName)
    .then(response => {
      const events = response.body
      console.log("bandsintownapi", response)
      return events
    })



  // return request.get(apiBaseUrl + '/artist/' + artistName + '/events').query({ app_id: '2ac02b0f64b829299b77a99a3e54278c' })
  //   .then(response => {
  //     const events = response.body
  //     console.log("bandsintownapi", response)
  //     return events
  //   })
}
