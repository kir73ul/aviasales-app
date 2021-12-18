import  { useEffect, useState } from "react";
import { sortTickets, filterTickets } from "./helpers/sorters";
import { AppStateType } from "../../combineStore";
import {List} from "./list";
import {ErrorMessage} from "./error-message";
import {Loader} from "./loader";
import {NoElems} from "./no-elems";
import { useDispatch, useSelector } from 'react-redux';
import { loadGradual } from "../../reducer";
import { getPortionOfTickets } from "../../actions";

export const TicketsList = () => {
  const items = useSelector((state: AppStateType) => state.ticketsReducer.portionOfItems)
  const hasErrored = useSelector((state: AppStateType) => state.ticketsReducer.hasErrored)
  const isLoading = useSelector((state: AppStateType) => state.ticketsReducer.isLoading)
  const stopsFilter = useSelector((state: AppStateType) => state.transfersReducer);
  const priority = useSelector((state: AppStateType) => state.priorityReducer);
  const [emptyList, setEmptyList] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const portionOfItems = useSelector((state: AppStateType) => state.ticketsReducer.portionOfItems)
  const dispatch = useDispatch()

  useEffect(() => {
    debugger
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      const ticketsPortion = loadGradual(items, portionOfItems, true)
      dispatch(getPortionOfTickets(ticketsPortion))
  }
  }, [window.scrollY])

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
