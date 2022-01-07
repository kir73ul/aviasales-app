import { AppDispatch } from './combineStore'
import {
	Carriers,
	NumbersOfTransfers,
	ParametersOfFilter,
	SortOfTickets,
	TicketsType,
} from './Types/Types'
import { actionTypes } from './Types/Action types'
import { url } from './Constants/Constants'

export type TransfersReducerType = ToggleCheckboxType | ToggleAllCheckboxesType

interface ToggleCheckboxType {
	type: typeof actionTypes.TOGGLE_CHECKBOX
	key: NumbersOfTransfers
	value: boolean
}

export const toggleCheckbox = (key: NumbersOfTransfers, value: boolean) => ({
	type: actionTypes.TOGGLE_CHECKBOX,
	key,
	value,
})
export const toggleAllCheckboxes = (value: boolean) => ({
	type: actionTypes.TOGGLE_ALL_CHECKBOXES,
	value,
})

interface ToggleAllCheckboxesType {
	type: typeof actionTypes.TOGGLE_ALL_CHECKBOXES
	value: boolean
}

export type PriorityReducerType = togglePriorityType

export interface togglePriorityType {
	type: typeof actionTypes.TOGGLE_PRIORITY
	value: SortOfTickets
}

export const togglePriority = (value: SortOfTickets) => ({
	type: actionTypes.TOGGLE_PRIORITY,
	value,
})

export type TicketsReducerType =
	| ItemsHasErroredType
	| ItemsIsLoadingType
	| ItemsFetchDataSuccessType
	| GetPortionOfTicketsType

interface ItemsHasErroredType {
	type: typeof actionTypes.ITEMS_HAS_ERRORED
	value: boolean
}

export const itemsHasErrored = (value: boolean) => ({
	type: actionTypes.ITEMS_HAS_ERRORED,
	value,
})

interface ItemsIsLoadingType {
	type: typeof actionTypes.ITEMS_IS_LOADING
	value: boolean
}

export const itemsIsLoading = (value: boolean) => ({
	type: actionTypes.ITEMS_IS_LOADING,
	value,
})

interface ItemsFetchDataSuccessType {
	type: typeof actionTypes.ITEMS_FETCH_DATA_SUCCESS
	value: TicketsType[]
}

export const itemsFetchDataSuccess = (value: TicketsType[]) => ({
	type: actionTypes.ITEMS_FETCH_DATA_SUCCESS,
	value,
})

interface GetPortionOfTicketsType {
	type: typeof actionTypes.GET_FILTERED_TICKETS
	value: TicketsType[]
}

export const getSortedTickets = (value: TicketsType[]) => ({
	type: actionTypes.GET_FILTERED_TICKETS,
	value,
})
export type SelectReducerType = SetPickingDateType | SetSortingItemType

interface SetPickingDateType {
	type: typeof actionTypes.SET_PICKING_DATE
	date: string | null
}

export const setPickingDate = (date: string | null) => ({
	type: actionTypes.SET_PICKING_DATE,
	date,
})

interface SetSortingItemType {
	type: typeof actionTypes.SET_SORTING_ITEMS
	sortingItems: ParametersOfFilter | Carriers | null
}

export const SetSortingItem = (sortingItems: ParametersOfFilter | Carriers | null) => ({
	type: actionTypes.SET_SORTING_ITEMS,
	sortingItems,
})

export function itemsFetchData() {
	return (dispatch: AppDispatch) => {
		dispatch(itemsIsLoading(true))
		fetch(url.searchID)
			.then((response) => response.json())
			.then(({ searchId }) => fetch(`${url.tickets}${searchId}`))
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText)
				}
				return response
			})
			.then((response) => response.json())
			.then((response) => {
				dispatch(itemsIsLoading(false))
				dispatch(itemsFetchDataSuccess(response.tickets))
			})
			.catch(() => {
				dispatch(itemsHasErrored(true))
				dispatch(itemsIsLoading(false))
			})
	}
}
