import React from 'react'

const App = () => {
  return (
   <div> 
      <div className ="title">
        <h1 className = "titleName">Do YOU need a gig?</h1>
      </div>
     <form className = "mainForm">
          <label>Name: <input type="text" name="Name" /></label>
          <label>City: <input type="text" name="City" /></label>
          <button>Go!</button>
      </form>
   </div>
  )
}

export default App
