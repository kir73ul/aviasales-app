import { TreeSelect } from 'antd'
import styles from './TicketFilter.module.scss'
import { ParametersOfFilter } from '../../Types/Types'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../combineStore'
import { SetSortingItem } from '../../actions'
import { genTreeProps } from './helpers/findAllCarriers'

export const TicketsFilter = () => {
	const allTickets = useSelector((state: AppStateType) => state.ticketsReducer.items)
	const dispatch = useDispatch()
	const handleChange = (value: ParametersOfFilter | string) => {
		dispatch(SetSortingItem(value))
	}
	const handlerClear = () => {
		dispatch(SetSortingItem(null))
	}
	const treeProps = genTreeProps(allTickets)
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
