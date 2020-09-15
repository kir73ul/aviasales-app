/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import format from 'date-fns/format';
import IdBase from '../../helpers/idBase';
import { itemsFetchData } from '../../actions';
import classes from './tickets-list.module.scss';

function TicketsList({ items, hasErrored, isLoading, fetchData }) {
  const idBase = new IdBase();

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

    const departTime = format(new Date(date), 'HH:mm');
    const departTimeBack = format(new Date(dateBack), 'HH:mm');
    const carrierLogo = `https://pics.avs.io/99/36/${carrier}.png`;

    return (
      <li key={id} className={classes['card-ticket']}>
        <span className={classes.price}>{price} RUB</span>
        <img className={classes.airline} src={carrierLogo} alt={carrier} />
        <span className={classes.subtitle}>
          {origin} - {destination}
        </span>
        <span className={classes.subtitle}>в пути</span>
        <span className={classes.subtitle}>{stops.length} пересадок</span>
        <span className={classes.date}>{departTime}</span>
        <span className={classes.parametr}>{duration}</span>
        <span className={classes.parametr}>{stops.join(', ')}</span>
        <span className={classes.subtitle}>
          {originBack} - {destinationBack}
        </span>
        <span className={classes.subtitle}>в пути</span>
        <span className={classes.subtitle}>{stopsBack.length} пересадок</span>
        <span className={classes.date}>{departTimeBack}</span>
        <span className={classes.parametr}>{durationBack}</span>
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
