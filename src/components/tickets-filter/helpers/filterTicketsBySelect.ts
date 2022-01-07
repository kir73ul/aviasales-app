import { Carriers, ParametersOfFilter, TicketsType } from '../../../Types/Types'
import { sortByPickedDate } from './dateSorting'

export const filterTicketsBySelect = (
	selectValue: ParametersOfFilter | Carriers | null,
	tickets: TicketsType[],
	date?: string
) => {
	switch (selectValue) {
		case ParametersOfFilter.lowerPrice:
			return tickets.sort((prev, next) => prev.price - next.price)
		case ParametersOfFilter.biggerPrice:
			return tickets.sort((prev, next) => next.price - prev.price)
		case ParametersOfFilter.departureDate:
			return tickets.sort(
				(prev, next) => Date.parse(prev.segments[0].date) - Date.parse(next.segments[0].date)
			)
		case ParametersOfFilter.arriveDate:
			return tickets.sort(
				(prev, next) => Date.parse(prev.segments[1].date) - Date.parse(next.segments[1].date)
			)
		case ParametersOfFilter.pickDate:
			return sortByPickedDate(tickets, date)
		case selectValue as Carriers:
			return tickets.filter((ticket) => ticket.carrier === selectValue)
		default:
			return tickets
	}
}
