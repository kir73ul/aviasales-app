import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../combineStore'
import classes from './transfers-filters.module.scss'
import { toggleAllCheckboxes, toggleCheckbox } from './../../actions'
import { NumbersOfTransfers } from '../../Types/Types'
import { translateNumberOfStops } from './../../Constants/Constants'
import { Title, Wrapper, List, Label, Input } from './styled'

export const TransfersFilters = () => {
	const stopsFilter = useSelector((state: AppStateType) => state.transfersReducer)
	const dispatch = useDispatch()

	const toggle = (evt: React.ChangeEvent<HTMLInputElement>, key: NumbersOfTransfers) => {
		const { checked } = evt.target

		if (key === NumbersOfTransfers.all) dispatch(toggleAllCheckboxes(checked))
		else dispatch(toggleCheckbox(key, checked))
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
				<Label htmlFor={value} checked={stopsFilter[key]}>{value}</Label>
			</li>
		)
	})

	return (
		<Wrapper /* className={classes.wrapper} */>
			<Title /* className={classes.title} */>Количество пересадок</Title>
			<List /* className={classes.list} */>{list}</List>
		</Wrapper>
	)
}
