import { useSelector } from 'react-redux'
import { AppStateType } from '../../combineStore'
import { selectFilteredTickets } from '../../selectors'
import { Notification } from './styled'

export const NoElems = () => {
	const hasErrored = useSelector((state: AppStateType) => state.ticketsReducer.hasErrored)
	const filteredTickets = useSelector(selectFilteredTickets)
	const isLoading = useSelector((state: AppStateType) => state.ticketsReducer.isLoading)
	const isEmptyList = !isLoading && !hasErrored && !filteredTickets.length

	return <>{isEmptyList && <Notification>Sorry! No flights</Notification>}</>
}
