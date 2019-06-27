import React from 'react'

const App = () => {
  return (
   <div> 
     <h1>Do YOU need a gig?</h1>
     <form>
          <label>Name: <input type="text" name="Name" /></label>
          <label>City: <input type="text" name="City" /></label>
          <button>Go!</button>
      </form>
   </div>
  )
}

export default App
