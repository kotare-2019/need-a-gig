import React from 'react'
import { createUser } from '../../client/internal-api';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      city: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange = event => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    const user = {
      name: this.state.name,
      city: this.state.city
    }
    createUser(user)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Do YOU need a gig?</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></label>
          <label>City: <input type="text" name="city" value={this.state.city} onChange={this.handleChange} /></label>
          <button>Go!</button>
        </form>
      </div>
    )
  }
}

export default App
