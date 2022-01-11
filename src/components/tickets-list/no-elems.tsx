import { Notification } from './styled'

interface NoElemsTypes {
	isTrue: boolean
}

export const NoElems = ({ isTrue }: NoElemsTypes) => {
	return isTrue ? <Notification>Sorry! No flights</Notification> : null
}
