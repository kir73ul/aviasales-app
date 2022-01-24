import { TicketsType } from '../../../Types/Types'

const millisecondsInDay = 86400000

const getDay = (date: string) => Math.floor(Date.parse(date) / millisecondsInDay)

export const sortByPickedDate = (tickets: TicketsType[], date: string | null | undefined) => {
	if (!date) return tickets
	return tickets.filter(({ segments }) => getDay(segments[0].date) === getDay(date))
}
