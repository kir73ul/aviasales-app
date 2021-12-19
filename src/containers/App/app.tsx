import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import classes from './app.module.scss'
import logo from './Logo.png'
import { TransfersFilters } from '../../components/transfers-filters'
import { TicketsMenu } from '../../components/tickets-menu'
import { TicketsList } from '../../components/tickets-list'
import { itemsFetchData } from './../../actions'
import { TicketsFilter } from './../../components/tickets-filter/TicketFilter'

export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(itemsFetchData())
  }, [dispatch])

  return (
    <div className={classes.app}>
      <div className={classes.cover} />
      <div className={classes['logo-wrapper']}>
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
      </div>
      <div className={classes['main-wrapper']}>
        <div className={classes['filters-wrap']}>
          <TransfersFilters />
          <TicketsFilter />
        </div>
        <div className={classes['sub-wrapper']}>
          <TicketsMenu />
          <TicketsList />
        </div>
      </div>
    </div>
  )
}
