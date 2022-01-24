import { Carriers, ParametersOfFilter, TicketsType } from '../../../Types/Types'
import { sortByPickedDate } from './dateSorting'

const sortByDate = (tickets: TicketsType[], segmentIndex: number) => {
	return tickets.sort(
		(prev, next) =>
			Date.parse(prev.segments[segmentIndex].date) - Date.parse(next.segments[segmentIndex].date)
	)
}

export const filterTicketsBySelect = (
	selectValue: ParametersOfFilter | Carriers | null,
	tickets: TicketsType[],
	date?: string | null
) => {
	if (!selectValue) return tickets
	switch (selectValue) {
		case ParametersOfFilter.lowerPrice:
			return tickets.sort((prev, next) => prev.price - next.price)
		case ParametersOfFilter.biggerPrice:
			return tickets.sort((prev, next) => next.price - prev.price)
		case ParametersOfFilter.departureDate:
			return sortByDate(tickets, 0)
		case ParametersOfFilter.arriveDate:
			return sortByDate(tickets, 1)
		case ParametersOfFilter.pickDate:
			return sortByPickedDate(tickets, date)
		case selectValue as Carriers:
			return tickets.filter((ticket) => ticket.carrier === selectValue)
		default:
			return tickets
	}
}
