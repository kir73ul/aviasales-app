import { AppDispatch } from "./combineStore";
import { NumbersOfTransfers, SortOfTickets, TicketsType } from "./Types/Types";
import {actionTypes} from "./Types/Action types";
import {url} from './Constants/Constants'

export const toggleCheckbox = (key: NumbersOfTransfers, value: boolean) => ({
  type: actionTypes.TOGGLE_CHECKBOX,
  key,
  value,
});

export const toggleAllCheckboxes = (value: boolean) => ({
  type: actionTypes.TOGGLE_ALL_CHECKBOXES,
  value,
});

export const togglePriority = (value: SortOfTickets) => ({
  type: actionTypes.TOGGLE_PRIORITY,
  value,
});

export const itemsHasErrored = (value: boolean)  => ({
  type:  actionTypes.ITEMS_HAS_ERRORED,
  value,
});

export const itemsIsLoading = (value: boolean)  => ({
  type:  actionTypes.ITEMS_IS_LOADING,
  value,
});


export const itemsFetchDataSuccess = (
  value: TicketsType[]
) => ({ type: actionTypes.ITEMS_FETCH_DATA_SUCCESS, value });

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
