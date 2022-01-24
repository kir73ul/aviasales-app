import { ticketCreator } from './helpers/ticketCreator'
import { idBase } from './helpers/idBase'
import { Ticket } from '../ticket'
import { ListOfItems } from './styled'
import { TicketsType } from '../../Types/Types'

interface ListType {
	items: TicketsType[]
}

export const List: React.FC<ListType> = ({ items }) => {
	const elems = items.map((item) => {
		const props = ticketCreator(item)
		const id = idBase.create()
		return <Ticket key={id} {...props} />
	})

	return <ListOfItems>{elems}</ListOfItems>
}
