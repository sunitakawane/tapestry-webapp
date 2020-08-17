import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./redux/actions/userActions";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const getUser = () => dispatch(userActions.getUser());
  getUser();
  return (
    // console.log(this.props),
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tapestry-Pooling! Watch this space.</h1>
      </header>
    </div>
  );
};

export default App;
