import React from 'react';
import classes from './app.module.scss';
import AppLogo from '../app-logo';
import TransfersFilters from '../transfers-filters';
import TicketsMenu from '../tickets-menu';
import TicketsList from '../tickets-list';

export default function App() {
  return (
    <div className={classes.app}>
      <div className={classes.cover} />
      <AppLogo />

      <div className={classes['main-wrapper']}>
        <TransfersFilters />
        <div className={classes['sub-wrapper']}>
          <TicketsMenu />
          <TicketsList />
        </div>
      </div>
    </div>
  );
}
