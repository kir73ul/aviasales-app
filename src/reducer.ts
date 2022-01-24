import { combineReducers } from 'redux'
import {
	PriorityReducerType,
	SelectReducerType,
	TicketsReducerType,
	TransfersReducerType,
} from './actions'
import { actionTypes } from './Types/Action types'
import {
	FiltersStateType,
	SortOfTickets,
	NumbersOfTransfers,
	TicketsStateType,
	SelectedStateType,
} from './Types/Types'

const priorityReducer = (state = SortOfTickets.cheapest, action: PriorityReducerType) => {
	const { type, payload } = action

	switch (type) {
		case actionTypes.TOGGLE_PRIORITY:
			return payload

		default:
			return state
	}
}

const initialFiltersState: FiltersStateType = {
	[NumbersOfTransfers.all]: true,
	[NumbersOfTransfers.zero]: true,
	[NumbersOfTransfers.one]: true,
	[NumbersOfTransfers.two]: true,
	[NumbersOfTransfers.three]: true,
}

const checks = [
	NumbersOfTransfers.zero,
	NumbersOfTransfers.one,
	NumbersOfTransfers.two,
	NumbersOfTransfers.three,
]

const setKey = (state: FiltersStateType, key: NumbersOfTransfers, value: boolean) => {
	const newState = { ...state, [key]: value }
	const keyCounter = checks.reduce((acc, item) => (newState[item] ? acc + 1 : acc), 0)
	keyCounter === 4 ? (newState.all = true) : (newState.all = false)
	return newState
}

const setAllKeys = (state: FiltersStateType, value: boolean) => {
	const { ...newState } = state
	newState.all = value
	checks.forEach((key) => {
		newState[key] = value
	})
	return newState
}

const transfersReducer = (state = initialFiltersState, action: TransfersReducerType) => {
	switch (action.type) {
		case actionTypes.TOGGLE_CHECKBOX:
			return setKey(state, action.payload.key, action.payload.isChecked)

		case actionTypes.TOGGLE_ALL_CHECKBOXES:
			return setAllKeys(state, action.payload)

		default:
			return state
	}
}

const initialTicketsState: TicketsStateType = {
	hasErrored: false,
	isLoading: true,
	tickets: [],
}

const ticketsReducer = (state = initialTicketsState, action: TicketsReducerType) => {
	switch (action.type) {
		case actionTypes.ITEMS_HAS_ERRORED:
			return {
				...state,
				hasErrored: action.payload,
			}

		case actionTypes.ITEMS_IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
			}

		case actionTypes.ITEMS_FETCH_DATA_SUCCESS:
			return {
				...state,
				tickets: action.payload,
			}

		default:
			return state
	}
}
const initialSelectState: SelectedStateType = {
	pickingDate: null,
	sortingItem: null,
}

const selectReducer = (state = initialSelectState, action: SelectReducerType) => {
	switch (action.type) {
		case actionTypes.SET_PICKING_DATE:
			return {
				...state,
				pickingDate: action.payload,
			}

		case actionTypes.SET_SORTING_ITEMS:
			return {
				...state,
				sortingItem: action.payload,
			}

		default:
			return state
	}
}

const rootReducer = combineReducers({
	priorityReducer,
	transfersReducer,
	ticketsReducer,
	selectReducer,
})

export default rootReducer
