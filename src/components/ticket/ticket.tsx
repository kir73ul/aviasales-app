import classes from './tickets.module.scss'
import { ticketCreator } from './../tickets-list/helpers/ticketCreator'

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
		<li className={classes['card-ticket']}>
			<span className={classes.price}>{price} RUB</span>
			<img className={classes.airline} src={carrierLogo} alt={carrier} />
			<span className={classes.subtitle}>
				{origin} - {destination}
			</span>
			<span className={classes.subtitle}>в пути</span>
			<span className={classes.subtitle}>{transfers}</span>
			<span className={classes.date}>
				{departTime} - {arrivalTime}
			</span>
			<span className={classes.parameter}>{ftdDuration}</span>
			<span className={classes.parameter}>{stops.join(', ')}</span>
			<span className={classes.subtitle}>
				{originBack} - {destinationBack}
			</span>
			<span className={classes.subtitle}>в пути</span>
			<span className={classes.subtitle}>{transfersBack}</span>
			<span className={classes.date}>
				{departTimeBack} - {arrivalTimeBack}
			</span>
			<span className={classes.parameter}>{ftdDurationBack}</span>
			<span className={classes.parameter}>{stopsBack.join(', ')}</span>
		</li>
	)
}
