/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ticketCreator from './helpers/ticketCreator';
import { sortTickets, filterTickets } from './helpers/sorters';
import idBase from './helpers/idBase';
import { itemsFetchData } from '../../actions';
import 'antd/dist/antd.css';
import classes from './tickets-list.module.scss';
import ErrorMessage from './error-message';
import Loader from './loader';
import Ticket from '../ticket';

function TicketsList({ ticketsReducer, switcher, priority, fetchData }) {
  const { items, hasErrored, isLoading } = ticketsReducer;

  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setFilteredItems(sortTickets(items, priority));
    setFilteredItems(filterTickets(items, switcher));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [priority, switcher, items]);

  const noElems = <span className={classes.error}>Not found tickets</span>;

  const elems = filteredItems.map((item) => {
    const props = ticketCreator(item);
    const id = idBase.create();
    return <Ticket key={id} {...props} />;
  });
  //   <TicketList />
  return (
    <div className={classes.wrapper}>
      <ErrorMessage hasErrored={hasErrored} />
      <Loader isLoading={isLoading && !hasErrored} />

      {!isLoading && !hasErrored && !elems.length && noElems}
      <ul className={classes.container}>{elems}</ul>
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
