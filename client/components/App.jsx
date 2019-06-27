import React from 'react'

const App = () => {
  return (
    <h1>Do YOU need a gig?</h1>
  )
}

export default App

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
  
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
        <h1>needagig!</h1>
        <Events events={this.state.events} />
      </>
    )
  }
}
export default App