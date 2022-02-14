import logo from './Logo.png'
import { TransfersFilters } from '../../components/transfers-filters'
import { TicketsMenu } from '../../components/tickets-menu'
import { TicketsList } from '../../components/tickets-list'
import { TicketsFilter } from './../../components/tickets-filter/TicketFilter'
import { DateFilter } from './../../components/tickets-filter/DatePicker'
import { AppWrapper, FilterWrap, Header, LinkedImage, MainContent } from './styled'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../combineStore'

export const App = () => {
	const isMenuRolledUp = useSelector((state: AppStateType) => state.selectReducer.isMenuRolledUp)

	return (
		<AppWrapper>
			<LinkedImage>
				<a href='/'>
					<img src={logo} alt='logo' />
				</a>
			</LinkedImage>
			<Header isMenuRolledUp={isMenuRolledUp} />
			<MainContent>
				<FilterWrap>
					<TransfersFilters />
					<TicketsFilter />
					<DateFilter />
				</FilterWrap>
				<div>
					<TicketsMenu />
					<TicketsList />
				</div>
			</MainContent>
		</AppWrapper>
	)
}
