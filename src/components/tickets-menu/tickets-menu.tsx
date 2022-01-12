import classes from './tickets-menu.module.scss'
import { AppStateType } from '../../combineStore'
import { useDispatch, useSelector } from 'react-redux'
import { togglePriority } from '../../actions'
import { ParametersOfFilter, SortOfTickets } from '../../Types/Types'
import { translateSortOfTickets } from './../../Constants/Constants'

const items = [
	{ key: SortOfTickets.cheapest, value: translateSortOfTickets.cheapest },
	{ key: SortOfTickets.fastest, value: translateSortOfTickets.fastest },
]

export const TicketsMenu = () => {
	const priority = useSelector((state: AppStateType) => state.priorityReducer)
	const sortingItem = useSelector((state: AppStateType) => state.selectReducer.sortingItem)
	const dispatch = useDispatch()
	const isSortingValid =
		sortingItem === ParametersOfFilter.biggerPrice || sortingItem === ParametersOfFilter.departureDate

	const buttons = items.map(({ key, value }) => {
		const buttonStyle = priority === key && !isSortingValid ? classes.itemSelected : classes.item
		return (
			<button
				disabled={isSortingValid}
				type='button'
				key={key}
				className={buttonStyle}
				onClick={() => dispatch(togglePriority(key))}
			>
				{value}
			</button>
		)
	})
	return <div className={classes.menu}>{buttons} </div>
}
