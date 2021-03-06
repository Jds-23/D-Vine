import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./Services/Store";
import {MyStateProvider} from "./Context/StateProvider";
import reducer, {initialState} from "./reducer";
import {CustomerDataProvider} from "./Context/CustomerDataProvider";
ReactDOM.render(
  <StateProvider>
    <MyStateProvider initialState={initialState} reducer={reducer}> 
    <CustomerDataProvider>
    <App />
    </CustomerDataProvider>
    </MyStateProvider>
  </StateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
