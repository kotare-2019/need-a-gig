import React from 'react'

const App = () => {
  return (
   <div> 
     <h1>Do YOU need a gig?</h1>
     <form>
          <label style={{display: 'block'}}>Name: <input type="text" name="Name" /></label>
          City: &nbsp;
          <select>
          <option value="Wellington">Wellington</option>
          <option value="Auckland">Auckland</option>
          </select>
          <button>Go!</button>
        </form>
   </div>
  )
}

export default App
//////

// import React from 'react'
// import Dragons from './Dragon2'
// import unsplashImage from './UnsplashComponent'
// import { getCapsules } from '../../api/spaceX'
// import { unsplashRandom } from '../../api/unsplashImages'


// class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       isVisible: false,
//       capsules: [],
//       image: []
//     }
//   }

//   componentDidMount() {
//     getCapsules()
//       .then(capsules => {
//         this.setState({ capsules: capsules })
//       })

//     unsplashRandom()
//       .then(image => {
//         this.setState({ image: image })
//       })
//   }

//   render() {
//     return (
//       <>
//         <h1>SpaceX!</h1>
//         {this.isVisible && <h2>What</h2>}
//         <Dragons allCapsules={this.state.capsules} />
//       </>
//     )
//   }
// }
// export default App