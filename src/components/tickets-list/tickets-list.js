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

function TicketsList({ items, hasErrored, isLoading, fetchData, transfersFilter, priorityFilter }) {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setFilteredItems(sortTickets(items, priorityFilter));
    setFilteredItems(filterTickets(items, transfersFilter));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [priorityFilter, transfersFilter, items]);

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

  const errorMessage = <span className={classes.error}>Sorry! There was an error loading the tickets</span>;

  const noElems = <span className={classes.error}>Not found tickets</span>;

  const elems = filteredItems.map((item) => {
    const props = ticketCreator(item);
    const id = idBase.create();
    return <Ticket key={id} {...props} />;
  });

  return (
    <div>
      {hasErrored && errorMessage}
      {isLoading && !hasErrored && renderLoading}
      {!isLoading && !hasErrored && !elems.length && noElems}
      <ul className={classes.wrapper}>{elems}</ul>
    </div>
  );
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

TicketsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  fetchData: PropTypes.func.isRequired,
  transfersFilter: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  priorityFilter: PropTypes.string.isRequired,
};

TicketsList.defaultProps = {
  hasErrored: true,
  isLoading: false,
};
