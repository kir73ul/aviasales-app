import  { useEffect, useState } from "react";
import { sortTickets, filterTickets } from "./helpers/sorters";
import { AppStateType } from "../../combineStore";
import {List} from "./list";
import {ErrorMessage} from "./error-message";
import {Loader} from "./loader";
import {NoElems} from "./no-elems";
import { useSelector } from 'react-redux';

export const TicketsList = () => {
  const items = useSelector((state: AppStateType) => state.ticketsReducer.items)
  const hasErrored = useSelector((state: AppStateType) => state.ticketsReducer.hasErrored)
  const isLoading = useSelector((state: AppStateType) => state.ticketsReducer.isLoading)
  const stopsFilter = useSelector((state: AppStateType) => state.transfersReducer);
  const priority = useSelector((state: AppStateType) => state.priorityReducer);
  const [emptyList, setEmptyList] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(sortTickets(items, priority));
    setFilteredItems(filterTickets(items, stopsFilter));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [priority, stopsFilter, items]);

  useEffect(() => {
    if(!isLoading && !hasErrored && !filteredItems.length) {
      setEmptyList(true)
    } else setEmptyList(false)   
  }, [filteredItems.length, hasErrored, isLoading]);

  return (
    <>
      <ErrorMessage />
      <Loader />
      <List items={filteredItems} />
      <NoElems isTrue={emptyList} />
    </>
  );
}
