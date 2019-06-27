import React from 'react'
import { getUsers, createUser } from '../../client/internal-api';

class App extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    this.refreshUsers()
  }

  refreshUsers = () => {
    getUsers().then(users => {
      this.setState({
        users
      })
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    
    event.preventDefault()

    console.log("form submitted")

    const user = {
      name: this.state.name,
      city: this.state.city
    }

    
    console.log(user)

    this.setState({
      name: '',
      city: ''
    })

    createUser(user).then(newUser => {
      this.refreshUsers()
    })
  }

  render() {
  return (
   <div> 
     <h1>Do YOU need a gig?</h1>
     <form onSubmit={this.handleSubmit}>
          <label>Name: <input type="text" name="Name" value={this.state.name} onChange={this.handleChange} /></label>
          <label>City: <input type="text" name="City" value={this.state.city} onChange={this.handleChange} /></label>
          <button>Go!</button>
      </form>
   </div>
  )
 }
}

export default App
