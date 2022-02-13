import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	/* rollUpMenu, toggleAllCheckboxes, toggleCheckbox */ TransfersReducerActions,
} from './../../actions'
import { NumbersOfTransfers } from '../../Types/Types'
import { translateNumberOfStops } from './../../Constants/Constants'
import { Title, Wrapper, List, Label, Input } from './styled'
import { selectStops } from '../../selectors'
import { Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'

export const TransfersFilters = () => {
	const transfers = useSelector(selectStops)
	const dispatch = useDispatch()

	const toggle = (evt: React.ChangeEvent<HTMLInputElement>, key: NumbersOfTransfers) => {
		const { checked } = evt.target

		if (key === NumbersOfTransfers.all)
			dispatch(TransfersReducerActions.toggleAllCheckboxes(checked))
		else dispatch(TransfersReducerActions.toggleCheckbox({ key, isChecked: checked }))
	}
	const checkboxes = [
		{ key: NumbersOfTransfers.all, value: translateNumberOfStops.all },
		{ key: NumbersOfTransfers.zero, value: translateNumberOfStops[0] },
		{ key: NumbersOfTransfers.one, value: translateNumberOfStops[1] },
		{ key: NumbersOfTransfers.two, value: translateNumberOfStops[2] },
		{ key: NumbersOfTransfers.three, value: translateNumberOfStops[3] },
	]

	const list = checkboxes.map(({ key, value }) => {
		return (
			<li key={key}>
				<Input
					type='checkbox'
					id={value}
					onChange={(evt: React.ChangeEvent<HTMLInputElement>) => toggle(evt, key)}
					checked={transfers.transfers[key]}
				/>
				<Label htmlFor={value} checked={transfers.transfers[key]}>
					{value}
				</Label>
			</li>
		)
	})

	return (
		<Wrapper>
			<Menu
				defaultOpenKeys={['sub1']}
				mode='inline'
				onOpenChange={() => dispatch(TransfersReducerActions.rollUpMenu())}
			>
				<SubMenu key='sub1' title={<Title>Количество пересадок</Title>}>
					<List>{list}</List>
				</SubMenu>
			</Menu>
		</Wrapper>
	)
}
