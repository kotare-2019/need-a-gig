import request from 'superagent'

export function createUser(user) {
  return request.post('/api/v1/users')
    .send(user)
    .end((err, res) => {
      console.log(err)
    })
}

export function getUsers() {
  return request.get('/api/v1/users')
    .then(response => {
      console.log('users: ', response.body)
      return response.body
    })
}
