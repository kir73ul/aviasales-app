import React, { useState } from 'react';
import classes from './tickets-content.module.scss';
import TicketsMenu from '../tickets-menu';
import TicketsList from '../tickets-list';

export default function TicketsContent() {
  const [menuMode, setMenuMode] = useState('cheapest');
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

  return (
    <div className={classes.wrapper}>
      <TicketsMenu mode={menuMode} onClickMenu={(name) => setMenuMode(name)} />
      <TicketsList data={data} />
    </div>
  );
}
