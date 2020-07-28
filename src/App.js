import React, { Component } from "react";

import { connect } from "react-redux";

import "./App.css";

export const App = () => {
  return (
    console.log(this.props),
    (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Tapestry-Pooling! Watch this space.</h1>
        </header>
      </div>
    )
  );
};

export default App;
