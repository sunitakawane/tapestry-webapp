import React, { Component } from 'react';

import './App.css';

export class App extends Component {
 
  render() {
    return (
      console.log(this.props),
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Tapestry-Pooling! Watch this space.</h1>
        </header>
      </div>
    );
  }
}

export default App;