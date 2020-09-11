import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import checkboxSwitcher from './reducers/checkboxSwitcher';
import priorityFilter from './reducers/priorityFilter';
import 'normalize.css';
import App from './components/App';

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const reducer = combineReducers({ checkboxSwitcher, priorityFilter });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
