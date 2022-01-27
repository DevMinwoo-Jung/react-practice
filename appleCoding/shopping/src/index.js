import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let alertBasic = true;

function alertReducer(state = alertBasic, action) {
  let alertState = state;
  if (action.type === "showAlert") {
    return (alertState = true);
  } else if (action.type === "hideAlert") {
    return (alertState = false);
  } else {
    return alertState;
  }
}



let basicState = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "멋진신발1", quan: 21 },
  { id: 2, name: "멋진신발2", quan: 22 },
  { id: 3, name: "멋진신발3", quan: 623 },
  { id: 4, name: "멋진신발4", quan: 24 },
];

function reducer(state = basicState, action) {
  if (action.type === "addItem") {
    const existedItem = state.find((element) => {
      return element.id === action.payload.id
    })
    console.log(existedItem);
    if(existedItem){
      console.log("여기 오기는 하지?")
      let copy = [...state];
      console.log(copy[action.payload.id], copy[action.payload.quan])
      copy[action.payload.id].quan ++;
      return copy;
    } else {
      let copy = [...state];
      copy.push(action.payload);
      return copy;
    }
  } else if (action.type === "itemPlus") {
    const modifiedState = [...state];
    let quantity = modifiedState[action.target].quan;
    quantity < 999
      ? (quantity = modifiedState[action.target].quan++)
      : (quantity = 0);
    return modifiedState;
  } else if (action.type === "itemMinus") {
    const modifiedState = [...state];
    let quantity = modifiedState[action.target].quan;
    quantity > 0
      ? (quantity = modifiedState[action.target].quan--)
      : (quantity = 0);
    return modifiedState;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, alertReducer }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
