import { ParametersOfFilter, TicketsType } from '../../../Types/Types'
import { dateFormatter } from './dateFormatter'
import { findAllCarriers } from './findAllCarriers'

const day = 86400000

export const filterTicketsBySelect = (
	selectValue: ParametersOfFilter | string,
	tickets: TicketsType[],
	date?: string
) => {
	switch (selectValue) {
		case ParametersOfFilter.lowerPrice:
			return tickets.sort((prev, next) => prev.price - next.price)
		case ParametersOfFilter.biggerPrice:
			return tickets.sort((prev, next) => next.price - prev.price)
		case ParametersOfFilter.date:
			return tickets.sort(
				(prev, next) => dateFormatter(prev.segments[0].date) - dateFormatter(next.segments[0].date)
			)
		case ParametersOfFilter.pickDate:
			return tickets.filter((ticket) =>
				date
					? Math.floor(dateFormatter(ticket.segments[0].date) / day) ===
					  Math.floor(dateFormatter(date) / day)
					: ticket
			)
		case selectValue:
			return tickets.filter((ticket) => ticket.carrier === selectValue)
		default:
			return tickets
	}
}
