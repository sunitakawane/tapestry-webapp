import React, { Component } from 'react';

import {connect} from 'react-redux';

import './App.css';


export class App extends Component {

  componentDidMount = () => {
    const user = {
      name: "Tapestry"
    }
    this.props.setUser(user)
  }
  
  render() {
    return (
      console.log(this.props),
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Tapestry-Pooling! Watch this space.</h1>
          {/* {<h2>{this.props.currentUser.name}</h2>} */}
        </header>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch){
  return {
    setUser: (userObj) => {
      dispatch({type: "SET_USER", payload: userObj})
    }
  }
}

function mapStateToProps (state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);