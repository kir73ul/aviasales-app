/* eslint-disable react/prop-types */
import React from 'react';
import classes from './tickets-list.module.scss';
import S7 from './imgs/S7.png';

export default function TicketsList({ data }) {
  const tickets = data.map((item) => {
    const {
      price,
      airline,
      forwWay,
      backWay,
      forwTime,
      forwDuration,
      backTime,
      backDuration,
      forwTransfers,
      backTransfers,
    } = item;

    return (
      <div className={classes['card-ticket']}>
        <span className={classes.price}>{price}</span>
        <img className={classes.airline} src={S7} alt={airline} />
        <span className={classes.subtitle}>{forwWay}</span>
        <span className={classes.subtitle}>в пути</span>
        <span className={classes.subtitle}>{forwTransfers[0]} пересадок</span>
        <span className={classes.parametr}>{forwTime}</span>
        <span className={classes.parametr}>{forwDuration}</span>
        <span className={classes.parametr}>{forwTransfers[1]}</span>
        <span className={classes.subtitle}>{backWay}</span>
        <span className={classes.subtitle}>в пути</span>
        <span className={classes.subtitle}>{backTransfers[0]} пересадок</span>
        <span className={classes.parametr}>{backTime}</span>
        <span className={classes.parametr}>{backDuration}</span>
        <span className={classes.parametr}>{backTransfers[1]}</span>
      </div>
    );
  });

  return (
    <div className={classes.wrapper}>
      {tickets}
      {tickets}
      {tickets}
      {tickets}
    </div>
  );
}
