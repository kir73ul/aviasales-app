import { Carriers, ParametersOfFilter } from '../../../Types/Types'
import { carrierIcons } from '../../../Constants/Constants'

export const treeForSelection = [
	{ value: ParametersOfFilter.lowerPrice, title: 'Увеличению цены' },
	{ value: ParametersOfFilter.biggerPrice, title: 'Уменьшению цены' },
	{ value: ParametersOfFilter.departureDate, title: 'Дате вылета' },
	{ value: ParametersOfFilter.arriveDate, title: 'Дате прилета' },
	{
		value: ParametersOfFilter.airCompany,
		disabled: true,
		title: 'Авиакомпании',
		children: Object.values(Carriers).map((carrier) => {
			return {
				id: Carriers[carrier],
				value: Carriers[carrier],
				title: (
					<img src={carrierIcons[Carriers[carrier]]} alt='' width={'80px'} height={'35px'}></img>
				),
			}
		}),
	},
]
