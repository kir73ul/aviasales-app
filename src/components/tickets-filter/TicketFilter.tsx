import { TreeSelect } from 'antd'
import styles from './TicketFilter.module.scss'
import { filterMethods } from './helpers/filterByPrice'
import { ParametersOfFilter } from '../../Types/Types'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../combineStore'
import { itemsFetchDataSuccess } from '../../actions'
import { genTreeProps } from './helpers/findAllCarriers'

export const TicketsFilter = () => {
	const allTickets = useSelector((state: AppStateType) => state.ticketsReducer.items)
	const dispatch = useDispatch()
	const handleChange = (value: ParametersOfFilter) => {
		const filteredTickets = filterMethods[value](allTickets)
		dispatch(itemsFetchDataSuccess(filteredTickets))
	}
	const treeProps = genTreeProps(allTickets)
	return (
		<div className={styles.wrap}>
			<TreeSelect
				onChange={(value: ParametersOfFilter) => handleChange(value)}
				style={{ width: 206.4 }}
				placeholder='Фильтровать билеты по'
				treeData={treeProps}
				treeIcon={true}
			></TreeSelect>
		</div>
	)
}
