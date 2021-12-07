/* eslint-disable no-unused-expressions */
import { combineReducers } from "redux";
import {
  PriorityReducerType,
  TicketsReducerType,
  TransfersReducerType,
} from "./actions";
import {
  ITEMS_FETCH_DATA_SUCCESS,
  ITEMS_HAS_ERRORED,
  TOGGLE_ALL_CHECKBOXES,
} from "./Constants/Constants";
import { ITEMS_IS_LOADING } from "./Constants/Constants";
import { TOGGLE_CHECKBOX } from "./Constants/Constants";
import { TOGGLE_PRIORITY } from "./Constants/Constants";
import { InitialFiltersStateType } from "./Types/Types";

function priorityReducer(state = "cheapest", action: PriorityReducerType) {
  const { type, value } = action;

  switch (type) {
    case TOGGLE_PRIORITY:
      return value;

    default:
      return state;
  }
}

const initialFiltersState: InitialFiltersStateType = {
  all: true,
  "0": true,
  "1": true,
  "2": true,
  "3": true,
};

const checks = ["0", "1", "2", "3"];

const setKey = (
  state: InitialFiltersStateType,
  key: string,
  value: boolean
) => {
  const newState = { ...state, [key]: value };
  const keyCounter = checks.reduce(
    (acc, item) => (newState[item] ? acc + 1 : acc),
    0
  );
  keyCounter === 4 ? (newState.all = true) : (newState.all = false);
  return newState;
};

const setAllKeys = (state: InitialFiltersStateType, value: boolean) => {
  const { priority, ...newState } = state;
  newState.all = value;
  checks.forEach((key) => {
    newState[key] = value;
  });
  return newState;
};

function transfersReducer(
  state = initialFiltersState,
  action: TransfersReducerType
) {
  //@ts-ignore
  const { type, key, value } = action;

  switch (type) {
    case TOGGLE_CHECKBOX:
      return setKey(state, key, value);

    case TOGGLE_ALL_CHECKBOXES:
      return setAllKeys(state, value);

    default:
      return state;
  }
}

const initialTicketsState = {
  hasErrored: false,
  isLoading: true,
  items: [],
};

function ticketsReducer(
  state = initialTicketsState,
  action: TicketsReducerType
) {
  const { type, value } = action;
  switch (type) {
    case ITEMS_HAS_ERRORED:
      return {
        ...state,
        hasErrored: value,
        isLoading: false,
      };

    case ITEMS_IS_LOADING:
      return {
        ...state,
        isLoading: value,
        hasErrored: false,
      };

    case ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: value,
        isLoading: false,
        hasErrored: false,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  priorityReducer,
  transfersReducer,
  ticketsReducer,
});

export default rootReducer;
