import { useEffect, useState, UIEvent } from 'react'
import { sortTickets, filterTickets } from './helpers/sorters'
import { AppStateType } from '../../combineStore'
import { List } from './list'
import { ErrorMessage } from './error-message'
import { Loader } from './loader'
import { NoElems } from './no-elems'
import { useDispatch, useSelector } from 'react-redux'
import { getPortionOfTickets } from '../../actions'
import { TicketsType } from '../../Types/Types'

export const TicketsList = () => {
	const items = useSelector((state: AppStateType) => state.ticketsReducer.items)
	const filteredTickets = useSelector((state: AppStateType) => state.ticketsReducer.portionOfItems)
	const hasErrored = useSelector((state: AppStateType) => state.ticketsReducer.hasErrored)
	const isLoading = useSelector((state: AppStateType) => state.ticketsReducer.isLoading)
	const stopsFilter = useSelector((state: AppStateType) => state.transfersReducer)
	const priority = useSelector((state: AppStateType) => state.priorityReducer)
	const [emptyList, setEmptyList] = useState(false)
	const [portionOfItems, setPortionOfItems] = useState(filteredTickets.slice(0, 10))
	const [lastIndexOfItems, setIndexOfShownTickets] = useState(0)

	const loadGradual = (
		portionOfItems: TicketsType[],
		filteredTickets: TicketsType[],
		isScrollOnBottom: boolean
	) => {
		console.log('lastIndexOfItems', lastIndexOfItems)
		console.log('filteredTickets', filteredTickets.length)

		if (portionOfItems.length <= 10 && lastIndexOfItems === 0) {
			console.log('1')
			console.log('window.scrollY', window.scrollY)

			window.scrollTo(0, window.scrollY / 2)
			setIndexOfShownTickets(lastIndexOfItems + 10)
			return filteredTickets.slice(0, lastIndexOfItems + 10)
		}
		if (filteredTickets.length - lastIndexOfItems <= 10) {
			console.log('2')

			setIndexOfShownTickets(lastIndexOfItems + (filteredTickets.length - lastIndexOfItems))
			return filteredTickets.slice(lastIndexOfItems - 20, lastIndexOfItems)
		}
		if (isScrollOnBottom && filteredTickets.length - lastIndexOfItems >= 10) {
			console.log('3')

			window.scrollTo(0, window.scrollY / 2)
			setIndexOfShownTickets(lastIndexOfItems + 10)
			return filteredTickets.slice(lastIndexOfItems - 20, lastIndexOfItems)
		}
		if (!isScrollOnBottom && lastIndexOfItems !== 0) {
			console.log('4')

			window.scrollTo(0, window.scrollY / 2)
			setIndexOfShownTickets(lastIndexOfItems - 10)
			return filteredTickets.slice(lastIndexOfItems, lastIndexOfItems + 10)
		}
		console.log('5')

		return portionOfItems
	}

	const scrollHandler = (event: any) => {
		if (event.target.documentElement.scrollTop > 200) {
			const ticketsPortion = loadGradual(portionOfItems, filteredTickets, false)
			setPortionOfItems(ticketsPortion)
		}
		if (
			event.target.documentElement.scrollHeight -
				(event.target.documentElement.scrollTop + window.innerHeight) <
			100
		) {
			const ticketsPortion = loadGradual(portionOfItems, filteredTickets, true)
			setPortionOfItems(ticketsPortion)
		}
	}
	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	})

	useEffect(() => {
		setIndexOfShownTickets(0)
		setPortionOfItems(filteredTickets.slice(0, 10))
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [filteredTickets])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [priority, stopsFilter])

	useEffect(() => {
		setPortionOfItems(sortTickets(items, priority))
	}, [priority])

	useEffect(() => {
		setPortionOfItems(filterTickets(items, stopsFilter))
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
