import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // routes url
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import appReducer from "./reducers/appReducer.js";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  errors: [],
  user: {
    name: "",
    password: "",
  },
  planets: [],
  trips: [],
};

const store = createStore(
  appReducer,
  initialState,
  compose(applyMiddleware(thunk), composeWithDevTools())
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
