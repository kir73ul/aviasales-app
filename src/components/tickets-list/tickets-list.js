/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatDate, formatDuration } from '../../helpers/formatDate';
import transfersHandler from '../../helpers/transfers-handler';
import IdBase from '../../helpers/idBase';
import { sortTickets, filterTickets } from '../../helpers/sorters';
import { itemsFetchData } from '../../actions';
import classes from './tickets-list.module.scss';
import Ticket from '../ticket';

const idBase = new IdBase();

function TicketsList({ items, hasErrored, isLoading, fetchData, transfersFilter, priorityFilter }) {
  const MSEC_IN_MIN = 60000;

  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setFilteredItems(sortTickets(items, priorityFilter));
  }, [priorityFilter, items]);

  useEffect(() => {
    setFilteredItems(filterTickets(items, transfersFilter));
  }, [transfersFilter, items]);

  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (isLoading) {
    return <div className={classes.loader}>Loading…</div>;
  }

  const elems = filteredItems.map((item) => {
    const key = idBase.create();

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

    const ticketProps = {
      key,
      price,
      carrierLogo,
      carrier,
      origin,
      destination,
      transfers,
      departTime,
      arrivalTime,
      ftdDuration,
      stops,
      originBack,
      destinationBack,
      transfersBack,
      departTimeBack,
      arrivalTimeBack,
      ftdDurationBack,
      stopsBack,
    };

    return <Ticket {...ticketProps} />;
  });

  return <ul className={classes.wrapper}>{elems}</ul>;
}

const mapStateToProps = ({ items, hasErrored, isLoading, transfersFilter, priorityFilter }) => ({
  items,
  hasErrored,
  isLoading,
  transfersFilter,
  priorityFilter,
});

const mapDispatchToProps = (dispatch) => {
  const fetchData = bindActionCreators(itemsFetchData, dispatch);
  return {
    fetchData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
