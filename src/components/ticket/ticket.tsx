import { ticketCreator } from './../tickets-list/helpers/ticketCreator'
import { AirlineImg, CardOfTicket, Date, Parameter, Price, Subtitle } from './styled'

export const Ticket = (props: ReturnType<typeof ticketCreator>) => {
	const {
		price,
		carrierLogo,
		carrier,
		origin,
		destination,
		transfers,
		departTime,
		arrivalTime,
		ftdDuration,
		stops,
		originBack,
		destinationBack,
		transfersBack,
		departTimeBack,
		arrivalTimeBack,
		ftdDurationBack,
		stopsBack,
	} = props

	return (
		<CardOfTicket>
			<Price>{price} RUB</Price>
			<AirlineImg src={carrierLogo} alt={carrier} />
			<Subtitle>
				{origin} - {destination}
			</Subtitle>
			<Subtitle>в пути</Subtitle>
			<Subtitle>{transfers}</Subtitle>
			<Date>
				{departTime} - {arrivalTime}
			</Date>
			<Parameter>{ftdDuration}</Parameter>
			<Parameter>{stops.join(', ')}</Parameter>
			<Subtitle>
				{originBack} - {destinationBack}
			</Subtitle>
			<Subtitle>в пути</Subtitle>
			<Subtitle>{transfersBack}</Subtitle>
			<Date>
				{departTimeBack} - {arrivalTimeBack}
			</Date>
			<Parameter>{ftdDurationBack}</Parameter>
			<Parameter>{stopsBack.join(', ')}</Parameter>
		</CardOfTicket>
	)
}
