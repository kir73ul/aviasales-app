import classes from './app.module.scss'
import logo from './Logo.png'
import { TransfersFilters } from '../../components/transfers-filters'
import { TicketsMenu } from '../../components/tickets-menu'
import { TicketsList } from '../../components/tickets-list'
import { TicketsFilter } from './../../components/tickets-filter/TicketFilter'
import { DateFilter } from './../../components/tickets-filter/DatePicker'
import { AppWrapper, FilterWrap, Header, LinkedImage, MainContent } from './styled'

export const App = () => {
	return (
		<AppWrapper /* className={classes.app} */>
			<Header /* className={classes.cover} */ />
			<LinkedImage /* className={classes['logo-wrapper']} */>
				<a href='/'>
					<img src={logo} alt='logo' />
				</a>
			</LinkedImage>
			<MainContent /* className={classes['main-wrapper']} */>
				<FilterWrap className={classes['filters-wrap']}>
					<TransfersFilters />
					<TicketsFilter />
					<DateFilter />
				</FilterWrap>
				<div className={classes['sub-wrapper']}>
					<TicketsMenu />
					<TicketsList />
				</div>
			</MainContent>
		</AppWrapper>
	)
}
//test
