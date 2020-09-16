/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatDate, formatDuration } from '../../helpers/formatDate';
import transfersHandler from '../../helpers/transfers-handler';
import IdBase from '../../helpers/idBase';
import { itemsFetchData } from '../../actions';
import classes from './tickets-list.module.scss';

function TicketsList({ items, hasErrored, isLoading, fetchData }) {
  const idBase = new IdBase();
  const MSEC_IN_MIN = 60000;

  useEffect(() => {
    fetchData();
  }, []);

  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (isLoading) {
    return <div className={classes.loader}>Loading…</div>;
  }

  const elems = items.slice(0, 9).map((item) => {
    const id = idBase.create();

    const { price, carrier, segments } = item;

    const { origin, destination, date, stops, duration } = segments[0];
    const {
      origin: originBack,
      destination: destinationBack,
      date: dateBack,
      stops: stopsBack,
      duration: durationBack,
    } = segments[1];

    const departTime = formatDate(date);
    const departTimeBack = formatDate(dateBack);
    const arrive = Date.parse(date) + duration * MSEC_IN_MIN;
    const arriveBack = Date.parse(dateBack) + duration * MSEC_IN_MIN;
    const arrivalTime = formatDate(arrive);
    const arrivalTimeBack = formatDate(arriveBack);
    const ftdDuration = formatDuration(duration);
    const ftdDurationBack = formatDuration(durationBack);
    const transfers = transfersHandler(stops.length);
    const transfersBack = transfersHandler(stopsBack.length);

    const carrierLogo = `https://pics.avs.io/99/36/${carrier}.png`;

    return (
      <li key={id} className={classes['card-ticket']}>
        <span className={classes.price}>{price} RUB</span>
        <img className={classes.airline} src={carrierLogo} alt={carrier} />
        <span className={classes.subtitle}>
          {origin} - {destination}
        </span>
        <span className={classes.subtitle}>в пути</span>
        <span className={classes.subtitle}>{transfers}</span>
        <span className={classes.date}>
          {departTime} - {arrivalTime}
        </span>
        <span className={classes.parametr}>{ftdDuration}</span>
        <span className={classes.parametr}>{stops.join(', ')}</span>
        <span className={classes.subtitle}>
          {originBack} - {destinationBack}
        </span>
        <span className={classes.subtitle}>в пути</span>
        <span className={classes.subtitle}>{transfersBack}</span>
        <span className={classes.date}>
          {departTimeBack} - {arrivalTimeBack}
        </span>
        <span className={classes.parametr}>{ftdDurationBack}</span>
        <span className={classes.parametr}>{stopsBack.join(', ')}</span>
      </li>
    );
  });

  return <ul className={classes.wrapper}>{elems}</ul>;
}

const mapStateToProps = ({ items, hasErrored, isLoading }) => ({ items, hasErrored, isLoading });

const mapDispatchToProps = (dispatch) => {
  const fetchData = bindActionCreators(itemsFetchData, dispatch);
  return {
    fetchData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
