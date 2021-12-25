import { combineReducers } from "redux";
import { PriorityReducerType, TicketsReducerType,  TransfersReducerType} from "./Types/Action types";
import {actionTypes} from "./Types/Action types";
import { FiltersStateType, SortOfTickets, NumbersOfTransfers,  initialTicketsStateType} from "./Types/Types";

const priorityReducer = (state = SortOfTickets.cheapest, action: PriorityReducerType) => {
  const { type, value } = action;

  switch (type) {
    case actionTypes.TOGGLE_PRIORITY:
      return value;

    default:
      return state;
  }
}

const initialFiltersState: FiltersStateType = {
  [NumbersOfTransfers.all]: true,
  [NumbersOfTransfers.zero]: true,
  [NumbersOfTransfers.one]: true,
  [NumbersOfTransfers.two]: true,
  [NumbersOfTransfers.three]: true
};

const checks = [NumbersOfTransfers.zero, NumbersOfTransfers.one, NumbersOfTransfers.two, NumbersOfTransfers.three]

const setKey = (
  state: FiltersStateType,
  key:  NumbersOfTransfers,
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

const setAllKeys = (state: FiltersStateType, value: boolean) => {
  const {...newState } = state;
  newState.all = value;
  checks.forEach((key) => {
    newState[key] = value;
  });
  return newState;
};

const transfersReducer = (state = initialFiltersState,  action: TransfersReducerType) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CHECKBOX:
      return setKey(state, action.key, action.value);

    case actionTypes.TOGGLE_ALL_CHECKBOXES:
      return setAllKeys(state, action.value);

    default:
      return state;
  }
}

const initialTicketsState: initialTicketsStateType = {
  hasErrored: false,
  isLoading: true,
  items: [],
};

function ticketsReducer(
  state = initialTicketsState,
  action: TicketsReducerType
) {
  switch (action.type) {
    case actionTypes.ITEMS_HAS_ERRORED:
      return {
        ...state,
        hasErrored: action.value,
        isLoading: false,
      };

    case actionTypes.ITEMS_IS_LOADING:
      return {
        ...state,
        isLoading: action.value,
        hasErrored: false,
      };

    case actionTypes.ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: action.value,
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
