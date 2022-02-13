import { useEffect, useState } from 'react'
import { List } from './list'
import { ErrorMessage } from './error-message'
import { Loader } from './loader'
import { NoElems } from './no-elems'
import { useDispatch, useSelector } from 'react-redux'
import { itemsFetchData } from '../../actions'
import { selectFilteredTickets } from '../../selectors'

const numOfTicketsInPortion = 10

export const TicketsList = () => {
	const filteredTickets = useSelector(selectFilteredTickets)
	const [countOfTickets, setCountOfTickets] = useState(numOfTicketsInPortion)
	const dispatch = useDispatch()

	const scrollHandler = () => {
		const pxFromBottom =
			document.documentElement.scrollHeight -
			(window.innerHeight + document.documentElement.scrollTop)
		if (pxFromBottom < 100 && pxFromBottom > 1) {
			setCountOfTickets((prevState) => prevState + numOfTicketsInPortion)
		}
	}
	const ticketPortion = filteredTickets.slice(0, countOfTickets)

	useEffect(() => {
		dispatch(itemsFetchData())
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [dispatch])

	useEffect(() => {
		document.documentElement.scrollTop = 0
		setCountOfTickets(numOfTicketsInPortion)
	}, [filteredTickets])

	return (
		<>
			<ErrorMessage />
			<Loader />
			<List items={ticketPortion} />
			<NoElems />
		</>
	)
}
