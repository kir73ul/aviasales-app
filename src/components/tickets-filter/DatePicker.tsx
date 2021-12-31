import { Space, DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getSortedTickets, setPickingDate } from '../../actions'
import { AppStateType } from '../../combineStore'
import { ParametersOfFilter } from '../../Types/Types'
import { filterTickets } from '../tickets-list/helpers/sorters'
import { filterTicketsBySelect } from './helpers/filterTicketsBySelect'
import styles from './TicketFilter.module.scss'

export const DateFilter = () => {
	const dispatch = useDispatch()
	const items = useSelector((state: AppStateType) => state.ticketsReducer.items)
	const stops = useSelector((state: AppStateType) => state.transfersReducer)
	const sortingItem = useSelector((state: AppStateType) => state.selectReducer.sortingItem)

	const setPickedDate = (date: string) => {
		/* 		const ticketOnPickDate = filterTicketsBySelect(ParametersOfFilter.pickDate, items, date)
		const ticketsFilteredBySelect = sortingItem
			? filterTicketsBySelect(sortingItem, ticketOnPickDate)
			: ticketOnPickDate
		dispatch(getSortedTickets(filterTickets(ticketsFilteredBySelect, stops))) */
		dispatch(setPickingDate(date))
	}

	const handleClear = () => {
		dispatch(setPickingDate(null))
		/* 		const filteredTickets = sortingItem ? filterTicketsBySelect(sortingItem, items) : items
		dispatch(getSortedTickets(filterTickets(filteredTickets, stops))) */
	}
	return (
		<Space className={styles.wrapDatePick}>
			<DatePicker
				onChange={(moment, date) => {
					moment ? setPickedDate(date) : handleClear()
				}}
				placeholder='Выбрать дату вылета'
				style={{ width: '206.4px' }}
				popupStyle={{ marginLeft: '-75px' }}
			/>
		</Space>
	)
}
