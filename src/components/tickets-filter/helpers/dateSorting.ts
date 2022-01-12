import { TicketsType } from '../../../Types/Types'

const millisecondsInDay = 86400000

export const sortByPickedDate = (tickets: TicketsType[], date?: string) => {
	return tickets.filter((ticket) =>
		date
			? Math.floor(Date.parse(ticket.segments[0].date) / millisecondsInDay) ===
			  Math.floor(Date.parse(date) / millisecondsInDay)
			: ticket
	)
}
