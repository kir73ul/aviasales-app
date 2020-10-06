/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { sortTickets, filterTickets } from './helpers/sorters';

import List from './list';
import ErrorMessage from './error-message';
import Loader from './loader';
import NoElems from './no-elems';

export default function TicketsList({ items, hasErrored, isLoading, stopsFilter, priority }) {
  const [emptyList, setEmptyList] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(sortTickets(items, priority));
    setFilteredItems(filterTickets(items, stopsFilter));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [priority, stopsFilter, items]);

  useEffect(() => {
    !isLoading && !hasErrored && !filteredItems.length ? setEmptyList(true) : setEmptyList(false);
  }, [filteredItems.length, hasErrored, isLoading]);

  return (
    <>
      <ErrorMessage hasErrored={hasErrored} />
      <Loader isLoading={isLoading} />
      <List items={filteredItems} />
      <NoElems isTrue={emptyList} />
    </>
  );
}

TicketsList.propTypes = {
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  stopsFilter: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  priority: PropTypes.string.isRequired,
};
