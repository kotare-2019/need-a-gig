import React from 'react';
import { artistEvents } from '../../api/bandsintown'

class Events extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  render() {

    return (
      <>
        <h2>Events!</h2>
        <ul>
          {this.props.artistEvents.map( => {
            console.log(capsule)
            return <>
              <li key={capsule.capsule_serial}>
                Capsule: {capsule.capsule_id} <br /> Status: {capsule.status} <br /> Original launch: {capsule.original_launch} <br /> Missions: {capsule.missions.map(missions => missions.name)}
              </li>
              <br />
            </>
          })}
        </ul>
      </>
    )
  }
}

