import { ticketCreator } from './helpers/ticketCreator'
import { idBase } from './helpers/idBase'
import { Ticket } from '../ticket'
import styles from './tickets-list.module.scss'
import { TicketsType } from '../../Types/Types'

interface ListType {
	items: TicketsType[]
}

export const List: React.FC<ListType> = ({ items }) => {
	const elems = items.map((item: TicketsType) => {
		const props = ticketCreator(item)
		const id = idBase.create()
		return <Ticket key={id} {...props} />
	})

	return <ul className={styles.container}>{elems}</ul>
}
