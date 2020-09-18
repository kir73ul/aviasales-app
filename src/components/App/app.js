/* eslint-disable react/prop-types */
import React from 'react';
import classes from './app.module.scss';
import AppHeader from '../app-header';
import TransfersFilters from '../transfers-filters';
import TicketsMenu from '../tickets-menu';
import TicketsList from '../tickets-list';

export default function App() {
  return (
    <div className={classes.app}>
      <AppHeader />
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
