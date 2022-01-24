import { useDispatch, useSelector } from 'react-redux'
import { togglePriority } from '../../actions'
import { ParametersOfFilter, SortOfTickets } from '../../Types/Types'
import { translateSortOfTickets } from './../../Constants/Constants'
import { Menu, PriorityButton } from './styled'
import { selectPriority, selectSortingItem } from '../../selectors'

const items = [
	{ key: SortOfTickets.cheapest, value: translateSortOfTickets.cheapest },
	{ key: SortOfTickets.fastest, value: translateSortOfTickets.fastest },
]

export const TicketsMenu = () => {
	const priority = useSelector(selectPriority)
	const sortingItem = useSelector(selectSortingItem)
	const dispatch = useDispatch()
	const isPriorityValid =
		sortingItem === ParametersOfFilter.biggerPrice ||
		sortingItem === ParametersOfFilter.departureDate ||
		sortingItem === ParametersOfFilter.arriveDate

	const buttons = items.map(({ key, value }) => {
		const isActive = priority === key && !isPriorityValid
		return (
			<PriorityButton
				disabled={isPriorityValid}
				type='button'
				key={key}
				onClick={() => dispatch(togglePriority(key))}
				isActive={isActive}
			>
				{value}
			</PriorityButton>
		)
	})
	return <Menu>{buttons} </Menu>
}
