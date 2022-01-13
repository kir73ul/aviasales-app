import { AppStateType } from '../../combineStore'
import { useDispatch, useSelector } from 'react-redux'
import { togglePriority } from '../../actions'
import { ParametersOfFilter, SortOfTickets } from '../../Types/Types'
import { translateSortOfTickets } from './../../Constants/Constants'
import { Menu, PriorityButton } from './styled'

const items = [
	{ key: SortOfTickets.cheapest, value: translateSortOfTickets.cheapest },
	{ key: SortOfTickets.fastest, value: translateSortOfTickets.fastest },
]

export const TicketsMenu = () => {
	const priority = useSelector((state: AppStateType) => state.priorityReducer)
	const sortingItem = useSelector((state: AppStateType) => state.selectReducer.sortingItem)
	const dispatch = useDispatch()
	const isSortingValid =
		sortingItem === ParametersOfFilter.biggerPrice ||
		sortingItem === ParametersOfFilter.departureDate ||
		sortingItem === ParametersOfFilter.arriveDate

	const buttons = items.map(({ key, value }) => {
		const isButtonActive = priority === key && !isSortingValid
		return (
			<PriorityButton
				disabled={isSortingValid}
				type='button'
				key={key}
				onClick={() => dispatch(togglePriority(key))}
				isButtonActive={isButtonActive}
			>
				{value}
			</PriorityButton>
		)
	})
	return <Menu>{buttons} </Menu>
}
