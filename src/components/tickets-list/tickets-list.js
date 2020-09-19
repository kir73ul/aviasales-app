/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  }, [priorityFilter, transfersFilter, items]);

  if (hasErrored) {
    return <p>Sorry! There was an error loading the tickets</p>;
  }

  const noElems = <p>Not found tickets</p>;

  const elems = filteredItems.map((item) => {
    const props = ticketCreator(item);
    const id = idBase.create();
    return <Ticket key={id} {...props} />;
  });

  return (
    <div>
      {isLoading ? (
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={100}
          showInfo={false}
          status="active"
        />
      ) : null}
      <ul className={classes.wrapper}>{elems.length ? elems : noElems}</ul>
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
