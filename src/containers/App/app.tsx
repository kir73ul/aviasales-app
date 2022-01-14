import logo from './Logo.png'
import { TransfersFilters } from '../../components/transfers-filters'
import { TicketsMenu } from '../../components/tickets-menu'
import { TicketsList } from '../../components/tickets-list'
import { TicketsFilter } from './../../components/tickets-filter/TicketFilter'
import { DateFilter } from './../../components/tickets-filter/DatePicker'
import { AppWrapper, FilterWrap, Header, LinkedImage, MainContent } from './styled'

export const App = () => {
	return (
		<AppWrapper>
			<Header />
			<LinkedImage>
				<a href='/'>
					<img src={logo} alt='logo' />
				</a>
			</LinkedImage>
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
//test
