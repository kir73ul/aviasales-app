import { AppDispatch } from "./combineStore";
import { SortOfTickets, TicketsType } from "./Types/Types";
import {
  ITEMS_HAS_ERRORED,
  TOGGLE_ALL_CHECKBOXES,
  TOGGLE_CHECKBOX,
  TOGGLE_PRIORITY,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS,
  urlForSearchID,
  urlForTickets
} from "./Constants/Constants";

export type TransfersReducerType = TglCheckboxType | TglAllCheckboxesType;
interface TglCheckboxType {
  type: typeof TOGGLE_CHECKBOX;
  key: string;
  value: boolean;
}
export const tglCheckbox = (key: string, value: boolean): TglCheckboxType => ({
  type: TOGGLE_CHECKBOX,
  key,
  value,
});

interface TglAllCheckboxesType {
  type: typeof TOGGLE_ALL_CHECKBOXES;
  value: boolean;
}
export const tglAllCheckboxes = (value: boolean): TglAllCheckboxesType => ({
  type: TOGGLE_ALL_CHECKBOXES,
  value,
});

export type PriorityReducerType = tglPriorityType;
export interface tglPriorityType {
  type: typeof TOGGLE_PRIORITY;
  value: SortOfTickets;
}
export const togglePriority = (value: SortOfTickets): tglPriorityType => ({
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
export const itemsHasErrored = (value: boolean): ItemsHasErroredType => ({
  type: ITEMS_HAS_ERRORED,
  value,
});

interface ItemsIsLoadingType {
  type: typeof ITEMS_IS_LOADING;
  value: boolean;
}
export const itemsIsLoading = (value: boolean): ItemsIsLoadingType => ({
  type: ITEMS_IS_LOADING,
  value,
});

interface ItemsFetchDataSuccessType {
  type: typeof ITEMS_FETCH_DATA_SUCCESS;
  value: TicketsType[];
}
export const itemsFetchDataSuccess = (
  value: TicketsType[]
): ItemsFetchDataSuccessType => ({ type: ITEMS_FETCH_DATA_SUCCESS, value });

export function itemsFetchData() {
  return (dispatch: AppDispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(urlForSearchID)
      .then((response) => response.json())
      .then(({ searchId }) =>
        fetch(urlForTickets + searchId)
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
