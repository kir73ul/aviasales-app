import { Select } from 'antd'
import styles from './TicketFilter.module.scss'
import { filterMethods } from './helpers/filterByPrice'
import { ParametersOfFilter } from '../../Types/Types'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../combineStore'
import { itemsFetchDataSuccess } from '../../actions'

const { Option } = Select

export const TicketsFilter = () => {
	const allTickets = useSelector((state: AppStateType) => state.ticketsReducer.items)
	const dispatch = useDispatch()
	const handleChange = (value: ParametersOfFilter) => {
		const filteredTickets = filterMethods[value](allTickets)
		dispatch(itemsFetchDataSuccess(filteredTickets))
	}
	return (
		<div className={styles.wrap}>
			<Select
				onChange={(value: ParametersOfFilter) => handleChange(value)}
				style={{ width: 206.4 }}
				placeholder='Фильтровать билеты по'
			>
				<Option value={ParametersOfFilter.lowerPrice}>Увеличению цены</Option>
				<Option value={ParametersOfFilter.biggerPrice}>Уменьшению цены</Option>
				<Option value={ParametersOfFilter.date}>Дате вылета</Option>
				<Option value={ParametersOfFilter.airCompany}>Авиакомпании</Option>
			</Select>
		</div>
	)
}
