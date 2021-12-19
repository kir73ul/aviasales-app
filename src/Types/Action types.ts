import { NumbersOfTransfers, SortOfTickets, TicketsType } from "./Types";

const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX" as const;
const TOGGLE_ALL_CHECKBOXES = "TOGGLE_ALL_CHECKBOXES" as const;
const TOGGLE_PRIORITY = "TOGGLE_PRIORITY" as const;
const ITEMS_HAS_ERRORED = "ITEMS_HAS_ERRORED" as const;
const ITEMS_IS_LOADING = "ITEMS_IS_LOADING" as const;
const ITEMS_FETCH_DATA_SUCCESS = "ITEMS_FETCH_DATA_SUCCESS" as const;

export const actionTypes = {
  TOGGLE_CHECKBOX,
  TOGGLE_ALL_CHECKBOXES,
  TOGGLE_PRIORITY,
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS
}

export type TransfersReducerType = ToggleCheckboxType | ToggleAllCheckboxesType;

interface ToggleCheckboxType {
  type: typeof TOGGLE_CHECKBOX;
  key: NumbersOfTransfers;
  value: boolean;
}
interface ToggleAllCheckboxesType {
  type: typeof TOGGLE_ALL_CHECKBOXES;
  value: boolean;
}
export type PriorityReducerType = togglePriorityType;
export interface togglePriorityType {
  type: typeof TOGGLE_PRIORITY;
  value: SortOfTickets;
}
export type TicketsReducerType =
  | ItemsHasErroredType
  | ItemsIsLoadingType
  | ItemsFetchDataSuccessType;
  
interface ItemsHasErroredType {
  type: typeof ITEMS_HAS_ERRORED;
  value: boolean;
}
  
interface ItemsIsLoadingType {
  type: typeof ITEMS_IS_LOADING;
  value: boolean;
}
interface ItemsFetchDataSuccessType {
  type: typeof ITEMS_FETCH_DATA_SUCCESS;
  value: TicketsType[];
}