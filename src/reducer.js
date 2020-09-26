/* eslint-disable no-unused-expressions */
import { combineReducers } from 'redux';

function priorityReducer(state = 'cheapest', action) {
  const { type, value } = action;

  switch (type) {
    case 'TOGGLE_PRIORITY':
      return value;

    default:
      return state;
  }
}

const initialFiltersState = {
  all: true,
  0: true,
  1: true,
  2: true,
  3: true,
};

const checks = ['0', '1', '2', '3'];

const setKey = (state, key, value) => {
  const newState = { ...state, [key]: value };
  const keyCounter = checks.reduce((acc, item) => (newState[item] ? acc + 1 : acc), 0);
  keyCounter === 4 ? (newState.all = true) : (newState.all = false);
  return newState;
};

const setAllKeys = (state, value) => {
  const { priority, ...newState } = state;
  newState.all = value;
  checks.forEach((key) => {
    newState[key] = value;
  });
  return newState;
};

function transfersReducer(state = initialFiltersState, action) {
  const { type, key, value } = action;

  switch (type) {
    case 'TOGGLE_CHECKBOX':
      return setKey(state, key, value);

    case 'TOGGLE_ALL_CHECKBOXES':
      return setAllKeys(state, value);

    default:
      return state;
  }
}

const initialTicketsState = {
  hasErrored: false,
  isLoading: false,
  items: [],
};

function ticketsReducer(state = initialTicketsState, action) {
  const { type, value } = action;
  switch (type) {
    case 'ITEMS_HAS_ERRORED':
      return { ...state, hasErrored: value };

    case 'ITEMS_IS_LOADING':
      return { ...state, isLoading: value };

    case 'ITEMS_FETCH_DATA_SUCCESS':
      return { ...state, items: value };

    default:
      return state;
  }
}

const rootReducer = combineReducers({ priorityReducer, transfersReducer, ticketsReducer });

export default rootReducer;
