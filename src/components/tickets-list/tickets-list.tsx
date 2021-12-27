import { useEffect, useState, UIEvent, SyntheticEvent } from 'react'
import { sortTickets, filterTickets } from './helpers/sorters'
import { AppStateType } from '../../combineStore'
import { List } from './list'
import { ErrorMessage } from './error-message'
import { Loader } from './loader'
import { NoElems } from './no-elems'
import { useDispatch, useSelector } from 'react-redux'
import { getSortedTickets } from '../../actions'

export const TicketsList = () => {
	const items = useSelector((state: AppStateType) => state.ticketsReducer.items)
	const filteredTickets = useSelector((state: AppStateType) => state.ticketsReducer.filteredTickets)
	const hasErrored = useSelector((state: AppStateType) => state.ticketsReducer.hasErrored)
	const isLoading = useSelector((state: AppStateType) => state.ticketsReducer.isLoading)
	const stopsFilter = useSelector((state: AppStateType) => state.transfersReducer)
	const priority = useSelector((state: AppStateType) => state.priorityReducer)
	const [emptyList, setEmptyList] = useState(false)
	const [portionOfItems, setPortionOfItems] = useState(filteredTickets.slice(0, 10))
	const [lastIndexOfItems, setIndexOfShownTickets] = useState(0)
	const dispatch = useDispatch()

	const scrollHandler = (event: any) => {
		if (
			event.target.documentElement.scrollHeight -
				(event.target.documentElement.scrollTop + window.innerHeight) <
			100
		) {
			setIndexOfShownTickets(lastIndexOfItems + 10)
			setPortionOfItems([
				...portionOfItems,
				...filteredTickets.slice(lastIndexOfItems, lastIndexOfItems + 10),
			])
		}
	}
	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	})

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
		setIndexOfShownTickets(0)
		setTimeout(() => setPortionOfItems(filteredTickets.slice(0, 10)), 0)
	}, [priority, stopsFilter, filteredTickets])

	useEffect(() => {
		dispatch(getSortedTickets(sortTickets(filteredTickets, priority)))
	}, [priority, filteredTickets])

	useEffect(() => {
		console.log('stopsFilter', stopsFilter)
		console.log('filteredTickets', filteredTickets)

		dispatch(getSortedTickets(filterTickets(filteredTickets, stopsFilter)))
	}, [stopsFilter])

	useEffect(() => {
		if (!isLoading && !hasErrored && !portionOfItems.length) {
			setEmptyList(true)
		} else setEmptyList(false)
	}, [portionOfItems.length, hasErrored, isLoading])

	return (
		<>
			<ErrorMessage />
			<Loader />
			<List items={portionOfItems} />
			<NoElems isTrue={emptyList} />
		</>
	)
}
