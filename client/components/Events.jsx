import React from 'react';
import { artistEvents } from '../../api/bandsintown'

const bandName = 'warpaint';


class Events extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // venue: '',
      // lineup: ''
    }

  }

  componentDidMount() {
    artistEvents(bandName)
      .then(band => {
        console.log(band)
      })
  }

  render() {

    return (
      <>
        <h2>Artist Events</h2>

      </>
    )
  }
}

export default Events