import { Space, DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getSortedTickets } from '../../actions'
import { AppStateType } from '../../combineStore'
import { ParametersOfFilter } from '../../Types/Types'
import { filterTicketsBySelect } from './helpers/filterTicketsBySelect'
import styles from './TicketFilter.module.scss'

export const DateFilter = () => {
	const dispatch = useDispatch()
	const items = useSelector((state: AppStateType) => state.ticketsReducer.items)
	const handlerChange = (date: string) => {
		const ticketOnPickDate = filterTicketsBySelect(ParametersOfFilter.pickDate, items, date)
		return dispatch(getSortedTickets(ticketOnPickDate))
	}
	return (
		<Space className={styles.wrapDatePick}>
			<DatePicker
				onPanelChange={() => dispatch(getSortedTickets(items))}
				onChange={(_, date) => {
					handlerChange(date)
				}}
				placeholder='Выбрать дату вылета'
				style={{
					width: '206.4px',
				}}
			/>
		</Space>
	)
}
