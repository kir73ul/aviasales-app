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

type PropertyType<T> = T extends { [key: string]: infer U } ? U : never

export type TransfersReducerType = ReturnType<PropertyType<typeof TransfersReducerActions>>

interface ToggleCheckboxPayloadType {
	key: NumbersOfTransfers
	isChecked: boolean
}

export const TransfersReducerActions = {
	toggleCheckbox: (payload: ToggleCheckboxPayloadType) => ({
		type: actionTypes.TOGGLE_CHECKBOX,
		payload,
	}),
	toggleAllCheckboxes: (payload: boolean) => ({
		type: actionTypes.TOGGLE_ALL_CHECKBOXES,
		payload,
	}),
	rollUpMenu: () => ({
		type: actionTypes.ROLL_UP_MENU,
	}),
}

export type PriorityReducerType = ReturnType<PropertyType<typeof PriorityReducerActions>>

export const PriorityReducerActions = {
	togglePriority: (payload: SortOfTickets) => ({
		type: actionTypes.TOGGLE_PRIORITY,
		payload,
	}),
}

export type TicketsReducerType = ReturnType<PropertyType<typeof TicketReducerActions>>

export const TicketReducerActions = {
	itemsHasErrored: (payload: boolean) => ({
		type: actionTypes.ITEMS_HAS_ERRORED,
		payload,
	}),
	itemsIsLoading: (payload: boolean) => ({
		type: actionTypes.ITEMS_IS_LOADING,
		payload,
	}),
	itemsFetchDataSuccess: (payload: TicketsType[]) => ({
		type: actionTypes.ITEMS_FETCH_DATA_SUCCESS,
		payload,
	}),
}

export type SelectReducerType = ReturnType<PropertyType<typeof SelectReducerActions>>
export const SelectReducerActions = {
	setPickingDate: (payload: string | null) => ({
		type: actionTypes.SET_PICKING_DATE,
		payload,
	}),
	SetSortingItem: (payload: ParametersOfFilter | Carriers | null) => ({
		type: actionTypes.SET_SORTING_ITEMS,
		payload,
	}),
}

export function itemsFetchData() {
	return (dispatch: AppDispatch) => {
		dispatch(TicketReducerActions.itemsIsLoading(true))
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
				dispatch(TicketReducerActions.itemsFetchDataSuccess(response.tickets))
				dispatch(TicketReducerActions.itemsIsLoading(false))
			})
			.catch(() => {
				dispatch(TicketReducerActions.itemsHasErrored(true))
				dispatch(TicketReducerActions.itemsIsLoading(false))
			})
	}
}
