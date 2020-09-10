import React from 'react';
import classes from './app.module.scss';
import AppHeader from '../app-header';
import LeftBar from '../left-bar';
import TicketsMenu from '../tickets-menu';
import TicketsList from '../tickets-list';

const data = [
  {
    price: '13 400 Р',
    forwWay: 'MOW - HKT',
    backWay: 'HKT - MOW',
    forwTime: '10:45 – 08:00',
    forwDuration: '21ч 15м',
    backTime: '11:20 – 00:50',
    backDuration: '13ч 30м',
    forwTransfers: [2, 'HKG, JNB'],
    backTransfers: [1, 'HKG'],
    airline: 'S7',
  },
];

export default function App() {
  return (
    <div className={classes.app}>
      <AppHeader />
      <div className={classes['main-wrapper']} >
        <LeftBar />
        <div className={classes['sub-wrapper']}>
          <TicketsMenu />
          <TicketsList data={data} />
        </div>
      </div>
    </div>
  );
}
