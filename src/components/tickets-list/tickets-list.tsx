import { useEffect, useState } from 'react'
import { AppStateType } from '../../combineStore'
import { List } from './list'
import { ErrorMessage } from './error-message'
import { Loader } from './loader'
import { NoElems } from './no-elems'
import { useDispatch, useSelector } from 'react-redux'
import { itemsFetchData } from '../../actions'
import { selectFilteredTickets } from '../../selectors'

export const TicketsList = () => {
	const filteredTickets = useSelector((state: AppStateType) => selectFilteredTickets(state))
	const hasErrored = useSelector((state: AppStateType) => state.ticketsReducer.hasErrored)
	const isLoading = useSelector((state: AppStateType) => state.ticketsReducer.isLoading)
	const [emptyList, setEmptyList] = useState(false)
	const [portionOfItems, setPortionOfItems] = useState(() => filteredTickets.slice(0, 10))
	const dispatch = useDispatch()
	console.log('rerender')

	const scrollHandler = () => {
		console.log('In handler', filteredTickets)
		if (
			document.documentElement.scrollHeight -
				(window.innerHeight + document.documentElement.scrollTop) <
			100
		) {
			setPortionOfItems((prevPortion) => {
				return [
					...prevPortion,
					...filteredTickets.slice(prevPortion.length, prevPortion.length + 10),
				]
			})
		}
	}

	useEffect(() => {
		dispatch(itemsFetchData())
		document.addEventListener('scroll', scrollHandler)
		console.log('useEffect without deps', filteredTickets)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
		setPortionOfItems(() => filteredTickets.slice(0, 10))
		console.log('useEffect deps filteredTickets', filteredTickets)
	}, [filteredTickets])

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
