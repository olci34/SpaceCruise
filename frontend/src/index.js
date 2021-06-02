import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // routes url
import { Provider } from "react-redux";
import { createStore } from "redux";
import appReducer from "./reducers/appReducer.js";

const initialState = {
  user: { name: "olci" },
  trips: [],
};

const store = createStore(appReducer, initialState);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
