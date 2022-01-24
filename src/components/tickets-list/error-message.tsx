import { useSelector } from 'react-redux'
import { AppStateType } from '../../combineStore'
import { Notification } from './styled'

export const ErrorMessage = () => {
	const hasErrored = useSelector((state: AppStateType) => state.ticketsReducer.hasErrored)

	return (
		<>
			{hasErrored && <Notification> Sorry! There was an error loading the tickets </Notification>}
		</>
	)
}
