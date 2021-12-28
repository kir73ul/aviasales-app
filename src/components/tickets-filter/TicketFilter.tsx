import { TreeSelect } from 'antd'
import styles from './TicketFilter.module.scss'
import { filterTicketsBySelect } from './helpers/filterTicketsBySelect'
import { ParametersOfFilter } from '../../Types/Types'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../combineStore'
import { getSortedTickets, SetSortingItem } from '../../actions'
import { genTreeProps } from './helpers/findAllCarriers'
import { filterTickets } from '../tickets-list/helpers/sorters'

export const TicketsFilter = () => {
	const filteredTickets = useSelector((state: AppStateType) => state.ticketsReducer.filteredTickets)
	const items = useSelector((state: AppStateType) => state.ticketsReducer.items)
	const pickingDate = useSelector((state: AppStateType) => state.SelectReducer.pickingDate)
	const priority = useSelector((state: AppStateType) => state.priorityReducer)
	const stops = useSelector((state: AppStateType) => state.transfersReducer)

	const dispatch = useDispatch()
	const handleChange = (value: ParametersOfFilter | string) => {
		const tickets = filterTicketsBySelect(value, filteredTickets)
		dispatch(getSortedTickets(tickets))
		dispatch(SetSortingItem(value))
	}
	const handlerClear = () => {
		const filteredTickets = pickingDate
			? filterTicketsBySelect(ParametersOfFilter.pickDate, items, pickingDate)
			: items
		dispatch(getSortedTickets(filterTickets(filteredTickets, stops)))
	}
	const treeProps = genTreeProps(filteredTickets)
	return (
		<div className={styles.wrap}>
			<TreeSelect
				onClear={() => handlerClear()}
				onChange={(value: ParametersOfFilter | string) => handleChange(value)}
				style={{ width: 206.4 }}
				placeholder='Фильтровать билеты по'
				treeData={treeProps}
				treeIcon={true}
				allowClear={true}
				treeDefaultExpandAll
			></TreeSelect>
		</div>
	)
}
