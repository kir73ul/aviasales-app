import { TreeSelect } from 'antd'
import { Carriers, ParametersOfFilter } from '../../Types/Types'
import { useDispatch } from 'react-redux'
import { SetSortingItem } from '../../actions'
import { treeForSelection } from './helpers/treeForSelection'
import { Wrapper } from './styled'

export const TicketsFilter = () => {
	const dispatch = useDispatch()
	const handleChange = (value: ParametersOfFilter | Carriers) => {
		dispatch(SetSortingItem(value))
	}
	const handlerClear = () => {
		dispatch(SetSortingItem(null))
	}
	return (
		<Wrapper zIndex={2}>
			<TreeSelect
				onClear={handlerClear}
				onChange={handleChange}
				getPopupContainer={(triggerNode) => triggerNode.parentNode}
				placeholder='Фильтровать билеты по'
				treeData={treeForSelection}
				treeIcon={true}
				allowClear={true}
				treeDefaultExpandAll
			/>
		</Wrapper>
	)
}
