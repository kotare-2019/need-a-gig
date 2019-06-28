import React from "react";

const App = () => {
  return (
    <div className="exportDiv">
      <div className="title">
        <h1 className="titleName">Do YOU need a gig?</h1>
      </div>
      <form className="mainForm">
        <label className="Name">
          <h2 className="nameTitle">Name</h2>
          <input className="inputName" type="text" name="Name" />
        </label>

        <label className="Name">
          City: <input type="text" name="City" />
        </label>
        <button>Go!</button>
      </form>
    </div>
  );
};

export default App;
