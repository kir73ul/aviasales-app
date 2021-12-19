import { ParametersOfFilter, TicketsType } from '../../../Types/Types'
import { url } from '../../../Constants/Constants'
import styles from './../TicketFilter.module.scss'

interface treePropsType {
	id?: string
	children?: treePropsType[]
	value: string
	title: string
	switcherIcon?: any
	disabled?: boolean
}

export const findAllCarriers = (tickets: TicketsType[]) => {
	const allDifferenceCarriers = new Set<string>()
	const extractCarriers = tickets.map(({ carrier }) => allDifferenceCarriers.add(carrier))
	return allDifferenceCarriers
}

export const genTreeProps = (allTickets: TicketsType[]) => {
	const carriers = findAllCarriers(allTickets)
	const treeProps: treePropsType[] = [
		{ value: ParametersOfFilter.lowerPrice, title: 'Увеличению цены' },
		{ value: ParametersOfFilter.biggerPrice, title: 'Уменьшению цены' },
		{ value: ParametersOfFilter.date, title: 'Дате вылета' },
		{ children: [], value: ParametersOfFilter.airCompany, disabled: true, title: 'Авиакомпании' },
	]
	carriers.forEach((value) => {
		const iconUrl = url.carrierLogo.replace('carrier', value)
		treeProps[3]?.children?.push({
			id: value,
			value: value,
			title: value,
			switcherIcon: <img className={styles.iconImg} src={iconUrl} alt=''></img>,
		})
	})
	return treeProps
}