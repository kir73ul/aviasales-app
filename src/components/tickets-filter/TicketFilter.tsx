import { TreeSelect } from 'antd'
import styles from './TicketFilter.module.scss'
import { filterTicketsBySelect } from './helpers/filterByPrice'
import { ParametersOfFilter } from '../../Types/Types'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../combineStore'
import { getSortedTickets, itemsFetchDataSuccess } from '../../actions'
import { genTreeProps } from './helpers/findAllCarriers'

export const TicketsFilter = () => {
	const filteredTickets = useSelector((state: AppStateType) => state.ticketsReducer.filteredTickets)
	const items = useSelector((state: AppStateType) => state.ticketsReducer.items)
	const dispatch = useDispatch()
	const handleChange = (value: ParametersOfFilter) => {
		const tickets = filterTicketsBySelect(value, filteredTickets)
		dispatch(getSortedTickets(tickets))
	}
	const treeProps = genTreeProps(filteredTickets)
	return (
		<div className={styles.wrap}>
			<TreeSelect
				onClear={() => dispatch(getSortedTickets(items))}
				onChange={(value: ParametersOfFilter) => handleChange(value)}
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
