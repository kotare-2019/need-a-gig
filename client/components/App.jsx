// import React from "react";
// import { createUser } from "../../client/internal-api";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       city: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = event => {
//     // console.log(event.target.value)
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   handleSubmit = event => {
//     const user = {
//       name: this.state.name,
//       city: this.state.city
//     };
//     createUser(user);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <div className="exportDiv">
//         <div className="title">
//           <h1 className="titleName">Do YOU need a gig?</h1>
//         </div>
//         <form onSubmit={this.handleSubmit} name="name" className="mainForm">
//           <label className="Name">
//             <h2 className="nameTitle">Name</h2>
//             <input
//               className="inputName"
//               type="text"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className="Name">
//             <h2 className="nameTitle">City</h2>
//             <input
//               className="inputName"
//               type="text"
//               value={this.state.city}
//               onChange={this.handleChange}
//               city="city"
//             />
//           </label>
//           <button className="goButton">
//             <a href="#" className="button" />
//             GO!
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;
/////////////////////////////

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
      <div className="exportDiv">
         <div className="title">
           <h1 className="titleName">Do YOU need a gig?</h1>
         </div>
        <form onSubmit={this.handleSubmit}>
        
          <label className="Name">  <h2 className="nameTitle">Name</h2> <input className="inputName" type="text" name="name" value={this.state.name} onChange={this.handleChange} /></label>
          <label className="Name"> <h2 className="nameTitle">City</h2> <input  className="inputName" type="text" name="city" value={this.state.city} onChange={this.handleChange} /></label>
          <button className="goButton">
           <a href="#" className="button" />
           GO!
          </button>
        </form>
      </div>
    )
  }
}

export default App;
