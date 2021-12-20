import { ParametersOfFilter, TicketsType } from '../../../Types/Types'
import { dateFormatter } from './dateFormatter'

const day = 86400000

export const filterMethods = {
	[ParametersOfFilter.lowerPrice]: (tickets: TicketsType[]) => {
		return tickets.sort((prev, next) => prev.price - next.price)
	},
	[ParametersOfFilter.biggerPrice]: (tickets: TicketsType[]) => {
		return tickets.sort((prev, next) => next.price - prev.price)
	},
	[ParametersOfFilter.date]: (tickets: TicketsType[]) => {
		return tickets.sort(
			(prev, next) => dateFormatter(prev.segments[0].date) - dateFormatter(next.segments[0].date)
		)
	},
	[ParametersOfFilter.airCompany]: (tickets: TicketsType[], carrier?: string) => {
		return tickets.filter((ticket) => ticket.carrier === carrier)
	},
	[ParametersOfFilter.pickDate]: (tickets: TicketsType[], date?: string) => {
		return tickets.filter((ticket) =>
			date
				? Math.floor(dateFormatter(ticket.segments[0].date) / day) ===
				  Math.floor(dateFormatter(date) / day)
				: ticket
		)
	},
}
