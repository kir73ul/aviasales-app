import { DatePicker } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPickingDate } from '../../actions'
import { AppStateType } from '../../combineStore'
import { Wrapper } from './styled'

export const DateFilter = () => {
	const [isHidden, setIsHidden] = useState(true)
	const isMenuRolledUp = useSelector((state: AppStateType) => state.transfersReducer.isMenuRolledUp)
	const dispatch = useDispatch()
	const handleChange = (moment: moment.Moment | null, date: string) => {
		dispatch(setPickingDate(moment ? date : null))
	}
	return (
		<Wrapper top={isMenuRolledUp ? '120px' : '280px'} isHidden={isHidden}>
			<DatePicker
				//@ts-expect-error
				getPopupContainer={(triggerNode: HTMLElement) => triggerNode.parentNode}
				onOpenChange={() => setIsHidden(true)}
				onBlur={() => setIsHidden(true)}
				onClick={() => setIsHidden((prev) => !prev)}
				onChange={handleChange}
				placeholder='Выбрать дату вылета'
			/>
		</Wrapper>
	)
}
