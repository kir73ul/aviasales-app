import { Carriers, ParametersOfFilter, TicketsType } from '../../../Types/Types'
import { url } from '../../../Constants/Constants'
import { ReactNode } from 'react'

interface TreeForSelectionType {
	id?: string
	children?: TreeForSelectionType[]
	value: string
	title?: ReactNode | ParametersOfFilter
	disabled?: boolean
}

export const generateTreeForSelection = (allTickets: TicketsType[]) => {
	const treeForSelection: TreeForSelectionType[] = [
		{ value: ParametersOfFilter.lowerPrice, title: 'Увеличению цены' },
		{ value: ParametersOfFilter.biggerPrice, title: 'Уменьшению цены' },
		{ value: ParametersOfFilter.departureDate, title: 'Дате вылета' },
		{ value: ParametersOfFilter.arriveDate, title: 'Дате прилета' },
		{ children: [], value: ParametersOfFilter.airCompany, disabled: true, title: 'Авиакомпании' },
	]
	for (const carrier in Carriers) {
		const iconUrl = url.carrierLogo.replace('carrier', carrier)
		treeForSelection[4]?.children?.push({
			id: carrier,
			value: carrier,
			title: <img src={iconUrl} alt='' width={'80px'} height={'35px'} />,
		})
	}
	return treeForSelection
}
