import React from "react";
import thunkMiddleware from 'redux-thunk'
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import App from './containers/App';
const store = createStore(todoApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  ))
ReactDOM.render(<App store={store} />, document.getElementById('root'))


// ReactDOM.render(<App />, document.querySelector("#root"));