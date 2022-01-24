import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAllCheckboxes, toggleCheckbox } from './../../actions'
import { NumbersOfTransfers } from '../../Types/Types'
import { translateNumberOfStops } from './../../Constants/Constants'
import { Title, Wrapper, List, Label, Input } from './styled'
import { selectStops } from '../../selectors'

export const TransfersFilters = () => {
	const stopsFilter = useSelector(selectStops)
	const dispatch = useDispatch()

	const toggle = (evt: React.ChangeEvent<HTMLInputElement>, key: NumbersOfTransfers) => {
		const { checked } = evt.target

		if (key === NumbersOfTransfers.all) dispatch(toggleAllCheckboxes(checked))
		else dispatch(toggleCheckbox({ key, isChecked: checked }))
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
					checked={stopsFilter[key]}
				/>
				<Label htmlFor={value} checked={stopsFilter[key]}>
					{value}
				</Label>
			</li>
		)
	})

	return (
		<Wrapper>
			<Title>Количество пересадок</Title>
			<List>{list}</List>
		</Wrapper>
	)
}
