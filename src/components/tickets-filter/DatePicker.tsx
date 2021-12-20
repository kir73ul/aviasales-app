import { Space, DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { itemsFetchDataSuccess } from '../../actions'
import { AppStateType } from '../../combineStore'
import { ParametersOfFilter } from '../../Types/Types'
import { filterMethods } from './helpers/filterByPrice'
import styles from './TicketFilter.module.scss'
import { itemsFetchData } from './../../actions'

export const DateFilter = () => {
	const dispatch = useDispatch()
	const items = useSelector((state: AppStateType) => state.ticketsReducer.items)
	const onChange = (date: string) => {
		const ticketOnPickDate = filterMethods[ParametersOfFilter.pickDate](items, date)
		console.log(date, ticketOnPickDate)

		return dispatch(itemsFetchDataSuccess(ticketOnPickDate))
	}
	return (
		<Space className={styles.wrapDatePick}>
			<DatePicker
				onChange={(_, date) => {
					onChange(date)
				}}
				onPanelChange={() => dispatch(itemsFetchData())}
				placeholder='Выбрать дату вылета'
				style={{
					width: '206.4px',
				}}
			/>
		</Space>
	)
}
