import { useEffect, useState, UIEvent, SyntheticEvent, useCallback } from 'react'
import { sortTickets, filterTickets } from './helpers/sorters'
import { AppStateType } from '../../combineStore'
import { List } from './list'
import { ErrorMessage } from './error-message'
import { Loader } from './loader'
import { NoElems } from './no-elems'
import { useDispatch, useSelector } from 'react-redux'
import { getSortedTickets, itemsFetchData } from '../../actions'
import { filterTicketsBySelect } from '../tickets-filter/helpers/filterTicketsBySelect'
import { ParametersOfFilter } from '../../Types/Types'

export const TicketsList = () => {
	const filteredTickets = useSelector((state: AppStateType) => state.ticketsReducer.filteredTickets)
	const tickets = useSelector((state: AppStateType) => state.ticketsReducer.tickets)
	const hasErrored = useSelector((state: AppStateType) => state.ticketsReducer.hasErrored)
	const isLoading = useSelector((state: AppStateType) => state.ticketsReducer.isLoading)
	const sortingItem = useSelector((state: AppStateType) => state.selectReducer.sortingItem)
	const pickingDate = useSelector((state: AppStateType) => state.selectReducer.pickingDate)
	const stopsFilter = useSelector((state: AppStateType) => state.transfersReducer)
	const priority = useSelector((state: AppStateType) => state.priorityReducer)
	const [emptyList, setEmptyList] = useState(false)
	const [portionOfItems, setPortionOfItems] = useState(filteredTickets.slice(0, 10))
	const dispatch = useDispatch()

	const scrollHandler = () => {
		if (
			document.documentElement.scrollHeight - (window.pageYOffset + window.innerHeight) < 100 &&
			filteredTickets.length > portionOfItems.length
		) {
			console.log('it must work')

			setPortionOfItems((prevPortion) => [
				...prevPortion,
				...filteredTickets.slice(portionOfItems.length, portionOfItems.length + 10),
			])
		}
	}

	useEffect(
		() => {
			document.addEventListener('scroll', scrollHandler)
			console.log('useEffect')

			return () => {
				document.removeEventListener('scroll', scrollHandler)
			}
		} /* , [] */
	)

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
		setPortionOfItems(filteredTickets.slice(0, 10))
	}, [filteredTickets])

	useEffect(() => {
		dispatch(itemsFetchData())
	}, [])

	useEffect(() => {
		const filteredByPriority = sortTickets(tickets, priority)
		const filteredBySelect = sortingItem
			? filterTicketsBySelect(sortingItem, filteredByPriority)
			: filteredByPriority
		const filteredByPickDate = pickingDate
			? filterTicketsBySelect(ParametersOfFilter.pickDate, filteredBySelect, pickingDate)
			: filteredBySelect
		dispatch(getSortedTickets(filterTickets(filteredByPickDate, stopsFilter)))
	}, [priority, stopsFilter, sortingItem, pickingDate, tickets])

	useEffect(() => {
		setTimeout(() => {
			if (!isLoading && !hasErrored && !portionOfItems.length) {
				setEmptyList(true)
			} else setEmptyList(false)
		}, 0)
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
