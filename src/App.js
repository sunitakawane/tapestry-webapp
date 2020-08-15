import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "./redux/actions/userActions";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUser());
  }, []);

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
