import { createSelector } from 'reselect'
import { AppStateType } from './combineStore'
import { filterTicketsBySelect } from './components/tickets-filter/helpers/filterTicketsBySelect'
import { filterTickets, sortTickets } from './components/tickets-list/helpers/sorters'
import { ParametersOfFilter } from './Types/Types'

export const selectSortingItem = (state: AppStateType) => state.selectReducer.sortingItem
export const selectPickingDate = (state: AppStateType) => state.selectReducer.pickingDate
export const selectPriority = (state: AppStateType) => state.priorityReducer
export const selectStops = (state: AppStateType) => state.transfersReducer
export const selectTickets = (state: AppStateType) => state.ticketsReducer.tickets

export const selectFilteredTickets = createSelector(
	[selectSortingItem, selectPickingDate, selectPriority, selectStops, selectTickets],
	(sortingItem, pickingDate, priority, numberOfTransfers, tickets) => {
		const filteredByPriority = sortTickets(tickets, priority)
		const filteredBySelect = filterTicketsBySelect(sortingItem, filteredByPriority)
		const filteredByPickDate = filterTicketsBySelect(
			ParametersOfFilter.pickDate,
			filteredBySelect,
			pickingDate
		)
		return filterTickets(filteredByPickDate, numberOfTransfers)
	}
)
