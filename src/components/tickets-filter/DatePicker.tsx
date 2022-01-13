import { Space, DatePicker } from 'antd'
import { useDispatch } from 'react-redux'
import { setPickingDate } from '../../actions'
import { Wrapper } from './styled'
import styles from './TicketFilter.module.scss'

export const DateFilter = () => {
	const dispatch = useDispatch()
	const setPickedDate = (date: string) => {
		dispatch(setPickingDate(date))
	}
	const handleClear = () => {
		dispatch(setPickingDate(null))
	}
	return (
		<Wrapper top='295px'>
			<Space /* className={styles.wrapDatePick} */>
				<DatePicker
					onChange={(moment, date) => {
						moment ? setPickedDate(date) : handleClear()
					}}
					placeholder='Выбрать дату вылета'
					style={{ width: '206.4px' }}
					popupStyle={{ marginLeft: '-75px' }}
				/>
			</Space>
		</Wrapper>
	)
}
