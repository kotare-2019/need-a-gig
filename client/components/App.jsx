import React from 'react'
import Events from './Events'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events
  
    }
  }

  componentDidMount() {
    EventData()
      .then(events => {
        this.setState({ events: events })
      })


  render() {
    return (
      <>
    <div> 
     <h1>Do YOU need a gig?</h1>
      <form>
          <label>Name: <input type="text" name="Name" /></label>
          <label>City: <input type="text" name="City" /></label>
          <button>Go!</button>
      </form>
    </div>
        <Events events={this.state.events} />
      </>
    )}
}




export default App
