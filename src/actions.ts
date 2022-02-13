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

export type TransfersReducerType = ToggleCheckboxType | ToggleAllCheckboxesType | RollUpMenuType

interface ToggleCheckboxPayloadType {
	key: NumbersOfTransfers
	isChecked: boolean
}

/* interface ToggleCheckboxType {
	type: typeof actionTypes.TOGGLE_CHECKBOX
	payload: ToggleCheckboxPayloadType
} */
type ToggleCheckboxType = ReturnType<typeof toggleCheckbox>
export const toggleCheckbox = (payload: ToggleCheckboxPayloadType) => ({
	type: actionTypes.TOGGLE_CHECKBOX,
	payload,
})
type ToggleAllCheckboxesType = ReturnType<typeof toggleAllCheckboxes>
/* interface ToggleAllCheckboxesType {
	type: typeof actionTypes.TOGGLE_ALL_CHECKBOXES
	payload: boolean
} */
export const toggleAllCheckboxes = (payload: boolean) => ({
	type: actionTypes.TOGGLE_ALL_CHECKBOXES,
	payload,
})
type RollUpMenuType = ReturnType<typeof rollUpMenu>
/* interface RollUpMenuType {
	type: typeof actionTypes.ROLL_UP_MENU
	payload: boolean
} */
export const rollUpMenu = () => ({
	type: actionTypes.ROLL_UP_MENU,
})

export type PriorityReducerType = togglePriorityType

export interface togglePriorityType {
	type: typeof actionTypes.TOGGLE_PRIORITY
	payload: SortOfTickets
}

export const togglePriority = (payload: SortOfTickets) => ({
	type: actionTypes.TOGGLE_PRIORITY,
	payload,
})

export type TicketsReducerType =
	| ItemsHasErroredType
	| ItemsIsLoadingType
	| ItemsFetchDataSuccessType

interface ItemsHasErroredType {
	type: typeof actionTypes.ITEMS_HAS_ERRORED
	payload: boolean
}

export const itemsHasErrored = (payload: boolean) => ({
	type: actionTypes.ITEMS_HAS_ERRORED,
	payload,
})

interface ItemsIsLoadingType {
	type: typeof actionTypes.ITEMS_IS_LOADING
	payload: boolean
}

export const itemsIsLoading = (payload: boolean) => ({
	type: actionTypes.ITEMS_IS_LOADING,
	payload,
})

interface ItemsFetchDataSuccessType {
	type: typeof actionTypes.ITEMS_FETCH_DATA_SUCCESS
	payload: TicketsType[]
}

export const itemsFetchDataSuccess = (payload: TicketsType[]) => ({
	type: actionTypes.ITEMS_FETCH_DATA_SUCCESS,
	payload,
})

export type SelectReducerType = SetPickingDateType | SetSortingItemType

interface SetPickingDateType {
	type: typeof actionTypes.SET_PICKING_DATE
	payload: string | null
}

export const setPickingDate = (payload: string | null) => ({
	type: actionTypes.SET_PICKING_DATE,
	payload,
})

interface SetSortingItemType {
	type: typeof actionTypes.SET_SORTING_ITEMS
	payload: ParametersOfFilter | Carriers | null
}

export const SetSortingItem = (payload: ParametersOfFilter | Carriers | null) => ({
	type: actionTypes.SET_SORTING_ITEMS,
	payload,
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
				dispatch(itemsFetchDataSuccess(response.tickets))
				dispatch(itemsIsLoading(false))
			})
			.catch(() => {
				dispatch(itemsHasErrored(true))
				dispatch(itemsIsLoading(false))
			})
	}
}
