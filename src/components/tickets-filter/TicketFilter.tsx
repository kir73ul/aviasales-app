import { TreeSelect } from 'antd'
import styles from './TicketFilter.module.scss'
import { Carriers, ParametersOfFilter } from '../../Types/Types'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../combineStore'
import { SetSortingItem } from '../../actions'
import { generateTreeForSelection } from './helpers/generateTreeForSelection'

export const TicketsFilter = () => {
	const allTickets = useSelector((state: AppStateType) => state.ticketsReducer.tickets)
	const dispatch = useDispatch()
	const handleChange = (value: ParametersOfFilter | Carriers) => {
		dispatch(SetSortingItem(value))
	}
	const handlerClear = () => {
		dispatch(SetSortingItem(null))
	}
	const treeForSelection = generateTreeForSelection(allTickets)
	return (
		<div className={styles.wrap}>
			<TreeSelect
				onClear={() => handlerClear()}
				onChange={(value: ParametersOfFilter | Carriers) => handleChange(value)}
				style={{ width: 206.4 }}
				placeholder='Фильтровать билеты по'
				treeData={treeForSelection}
				treeIcon={true}
				allowClear={true}
				treeDefaultExpandAll
			></TreeSelect>
		</div>
	)
}
