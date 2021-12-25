import { Space, DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getSortedTickets } from '../../actions'
import { AppStateType } from '../../combineStore'
import { ParametersOfFilter } from '../../Types/Types'
import { filterMethods } from './helpers/filterByPrice'
import styles from './TicketFilter.module.scss'

export const DateFilter = () => {
	const dispatch = useDispatch()
	const items = useSelector((state: AppStateType) => state.ticketsReducer.items)
	const onChange = (date: string) => {
		const ticketOnPickDate = filterMethods[ParametersOfFilter.pickDate](items, date)
		return dispatch(getSortedTickets(ticketOnPickDate))
	}
	return (
		<Space className={styles.wrapDatePick}>
			<DatePicker
				onChange={(_, date) => {
					onChange(date)
				}}
				placeholder='Выбрать дату вылета'
				style={{
					width: '206.4px',
				}}
			/>
		</Space>
	)
}
