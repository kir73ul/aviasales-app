import { AppDispatch } from "./combineStore";
import { NumbersOfTransfers, SortOfTickets, TicketsType } from "./Types/Types";
import {
  ITEMS_HAS_ERRORED,
  TOGGLE_ALL_CHECKBOXES,
  TOGGLE_CHECKBOX,
  TOGGLE_PRIORITY,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS,
  url
} from "./Constants/Constants";

const inferLiteralFromString = <T extends string>(arg: T): T => arg

export type TransfersReducerType = ToggleCheckboxType | ToggleAllCheckboxesType;

interface ToggleCheckboxType {
  type: typeof TOGGLE_CHECKBOX;
  key: NumbersOfTransfers;
  value: boolean;
}
export const toggleCheckbox = (key: NumbersOfTransfers, value: boolean) => ({
  type: inferLiteralFromString(TOGGLE_CHECKBOX),
  key,
  value,
});

interface ToggleAllCheckboxesType {
  type: typeof TOGGLE_ALL_CHECKBOXES;
  value: boolean;
}
export const toggleAllCheckboxes = (value: boolean) => ({
  type: inferLiteralFromString(TOGGLE_ALL_CHECKBOXES),
  value,
});

export type PriorityReducerType = togglePriorityType;
export interface togglePriorityType {
  type: typeof TOGGLE_PRIORITY;
  value: SortOfTickets;
}
export const togglePriority = (value: SortOfTickets) => ({
  type: TOGGLE_PRIORITY,
  value,
});

export type TicketsReducerType =
  | ItemsHasErroredType
  | ItemsIsLoadingType
  | ItemsFetchDataSuccessType;

  
  interface ItemsHasErroredType {
  type: typeof ITEMS_HAS_ERRORED;
  value: boolean;
}

export const itemsHasErrored = (value: boolean)  => ({
  type:  inferLiteralFromString(ITEMS_HAS_ERRORED),
  value,
});

interface ItemsIsLoadingType {
  type: typeof ITEMS_IS_LOADING;
  value: boolean;
}
export const itemsIsLoading = (value: boolean)  => ({
  type:  inferLiteralFromString(ITEMS_IS_LOADING),
  value,
});

interface ItemsFetchDataSuccessType {
  type: typeof ITEMS_FETCH_DATA_SUCCESS;
  value: TicketsType[];
}
export const itemsFetchDataSuccess = (
  value: TicketsType[]
) => ({ type: inferLiteralFromString(ITEMS_FETCH_DATA_SUCCESS), value });

export function itemsFetchData() {
  return (dispatch: AppDispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url.searchID)
      .then((response) => response.json())
      .then(({ searchId }) =>
        fetch(`${url.tickets}${searchId}`)
      )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }        
        return response;
      })
      .then((response) => response.json())
      .then((res) => {
        dispatch(itemsFetchDataSuccess(res.tickets));
      })
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
