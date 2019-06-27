import request from 'superagent'

const apiBaseUrl = 'https://rest.bandsintown.com/'

// export function EventData() {
//   return request.get(apiBaseUrl + '/EventData')
//     .then(response => {
//       const events = response.body
//       return events
//     })
// }

 export function artistEvents() {
    return request.get(apiBaseUrl + '/artists' + artistName + '/events').query({app_id: '2ac02b0f64b829299b77a99a3e54278c'})
    .then(response => {
        const events = response.body
        return events
    })
    }
