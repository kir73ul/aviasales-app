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
		children: [
			{
				id: Carriers.SU,
				value: Carriers.SU,
				title: <img src={carrierIcons[Carriers.SU]} alt='' width={'80px'} height={'35px'}></img>,
			},
			{
				id: Carriers.EK,
				value: Carriers.EK,
				title: <img src={carrierIcons[Carriers.EK]} alt='' width={'80px'} height={'35px'}></img>,
			},
			{
				id: Carriers.EY,
				value: Carriers.EY,
				title: <img src={carrierIcons[Carriers.EY]} alt='' width={'80px'} height={'35px'}></img>,
			},
			{
				id: Carriers.FV,
				value: Carriers.FV,
				title: <img src={carrierIcons[Carriers.FV]} alt='' width={'80px'} height={'35px'}></img>,
			},
			{
				id: Carriers.MH,
				value: Carriers.MH,
				title: <img src={carrierIcons[Carriers.MH]} alt='' width={'80px'} height={'35px'}></img>,
			},
			{
				id: Carriers.S7,
				value: Carriers.S7,
				title: <img src={carrierIcons[Carriers.S7]} alt='' width={'80px'} height={'35px'}></img>,
			},
			{
				id: Carriers.TG,
				value: Carriers.TG,
				title: <img src={carrierIcons[Carriers.TG]} alt='' width={'80px'} height={'35px'}></img>,
			},
		],
	},
]
