/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import ticketCreator from '../../helpers/ticketCreator';
import { sortTickets, filterTickets } from '../../helpers/sorters';
import idBase from '../../helpers/idBase';
import { itemsFetchData } from '../../actions';
import 'antd/dist/antd.css';
import classes from './tickets-list.module.scss';
import Ticket from '../ticket';
import mockedServer from '../../helpers/mocked-server';

function TicketsList({ ticketsReducer, switcher, priority, fetchData }) {
  const { hasErrored, isLoading } = ticketsReducer;
  const items = mockedServer;
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setFilteredItems(sortTickets(items, priority));
    setFilteredItems(filterTickets(items, switcher));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [priority, switcher, items]);

  const renderLoading = (
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={100}
      showInfo={false}
      status="active"
    />
  );

  //  const errorMessage = <span className={classes.error}>Sorry! There was an error loading the tickets</span>;

  const noElems = <span className={classes.error}>Not found tickets</span>;

  const elems = filteredItems.map((item) => {
    const props = ticketCreator(item);
    const id = idBase.create();
    return <Ticket key={id} {...props} />;
  });
  //  {hasErrored && errorMessage}
  return (
    <div className={classes.wrapper}>
      {isLoading && !hasErrored && renderLoading}
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
