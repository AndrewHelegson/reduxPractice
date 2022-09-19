import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const defaultStore = {
  passengers: 0,
  rabbits: 0
}


const reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case "ADD_PASSENGERS":
      return { ...state, passengers: state.passengers + action.payload }
    case "REMOVE_PASSENGERS":
      return { ...state, passengers: state.passengers - action.payload }
    case "ADD_RABBITS":
      return { ...state, rabbits: state.rabbits + action.payload }
    case "REMOVE_RABBITS":
      return { ...state, rabbits: state.rabbits - action.payload }
    default:
      return state
  }
}

const store = createStore(reducer)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
