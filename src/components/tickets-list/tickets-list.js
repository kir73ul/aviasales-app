/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { sortTickets, filterTickets } from './helpers/sorters';
import { itemsFetchData } from '../../actions';
import classes from './tickets-list.module.scss';
import List from './list';
import ErrorMessage from './error-message';
import Loader from './loader';
import NoElems from './no-elems';

function TicketsList({ ticketsReducer, switcher, priority, fetchData }) {
  const { items, hasErrored, isLoading } = ticketsReducer;
  const [emptyList, setEmptyList] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setFilteredItems(sortTickets(items, priority));
    setFilteredItems(filterTickets(items, switcher));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [priority, switcher, items]);

  useEffect(() => {
    !isLoading && !hasErrored && !filteredItems.length ? setEmptyList(true) : setEmptyList(false);
  }, [filteredItems.length, hasErrored, isLoading]);

  return (
    <div className={classes.wrapper}>
      <ErrorMessage hasErrored={hasErrored} />
      <Loader isLoading={isLoading} />
      <List items={filteredItems} />
      <NoElems isTrue={emptyList} />
    </div>
  );
}

const mapStateToProps = ({ ticketsReducer, transfersReducer, priorityReducer }) => ({
  ticketsReducer,
  switcher: transfersReducer,
  priority: priorityReducer,
});

const mapDispatchToProps = (dispatch) => {
  const fetchData = bindActionCreators(itemsFetchData, dispatch);
  return {
    fetchData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);

TicketsList.propTypes = {
  ticketsReducer: PropTypes.shape({
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.object.isRequired),
  }).isRequired,
  fetchData: PropTypes.func.isRequired,
  switcher: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  priority: PropTypes.string.isRequired,
};
