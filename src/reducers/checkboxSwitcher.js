/* eslint-disable no-unused-expressions */

const initialState = {
  all: false,
  without: false,
  one: false,
  two: false,
  three: false,
};

const checks = ['without', 'one', 'two', 'three'];

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

export default function checkboxSwitcher(state = initialState, action) {
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
