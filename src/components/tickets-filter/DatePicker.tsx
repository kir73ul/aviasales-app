import { Space, DatePicker } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPickingDate } from '../../actions'
import { Wrapper } from './styled'

export const DateFilter = () => {
	const [isHidden, setIsHidden] = useState(true)
	const dispatch = useDispatch()
	const handleChange = (moment: moment.Moment | null, date: string) => {
		moment ? dispatch(setPickingDate(date)) : dispatch(setPickingDate(null))
	}
	return (
		<Wrapper top='279.67px'>
			<Space>
				<DatePicker
					onOpenChange={() => setIsHidden(true)}
					onBlur={() => setIsHidden(true)}
					onClick={() => setIsHidden((prev) => !prev)}
					onChange={handleChange}
					//@ts-expect-error
					getPopupContainer={(triggerNode: HTMLElement) => triggerNode.parentNode}
					placeholder='Выбрать дату вылета'
					popupStyle={{ display: `${isHidden ? 'none' : 'block'}` }}
				/>
			</Space>
		</Wrapper>
	)
}
