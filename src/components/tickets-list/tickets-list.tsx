import  { useEffect, useState, UIEvent} from "react";
import { sortTickets, filterTickets } from "./helpers/sorters";
import { AppStateType } from "../../combineStore";
import {List} from "./list";
import {ErrorMessage} from "./error-message";
import {Loader} from "./loader";
import {NoElems} from "./no-elems";
import { useDispatch, useSelector } from 'react-redux';
import { getPortionOfTickets } from "../../actions";
import { TicketsType } from "../../Types/Types";

export const TicketsList = () => {
  const items = useSelector((state: AppStateType) => state.ticketsReducer.items)
/*   const portionOfItems = useSelector((state: AppStateType) => state.ticketsReducer.portionOfItems)
 */  const hasErrored = useSelector((state: AppStateType) => state.ticketsReducer.hasErrored)
  const isLoading = useSelector((state: AppStateType) => state.ticketsReducer.isLoading)
  const stopsFilter = useSelector((state: AppStateType) => state.transfersReducer);
  const priority = useSelector((state: AppStateType) => state.priorityReducer);
  const [emptyList, setEmptyList] = useState(false);
  const [filteredItems, setFilteredItems] = useState(/* portionOfItems */items.slice(0, 10));
  const [lastIndexOfItems, setIndexOfShownTickets] = useState(10);
  const dispatch = useDispatch()

    const loadGradual = (items: TicketsType[], portionOfItems: TicketsType[], isScrollOnBottom: boolean ) => {
      
      if (portionOfItems.length <= 10 && lastIndexOfItems === 10) {
        console.log('<10');
        
        setIndexOfShownTickets(lastIndexOfItems + 10)
        return [...filteredItems, ...items.slice(lastIndexOfItems, lastIndexOfItems + 10)]
      }
      if ((items.length - lastIndexOfItems) <= 10) {
        setIndexOfShownTickets(lastIndexOfItems + (items.length - lastIndexOfItems))
        return items.slice(lastIndexOfItems)
      }
      if ((isScrollOnBottom && items.length === lastIndexOfItems) ||
          (!isScrollOnBottom && lastIndexOfItems === 10) ) {
            return portionOfItems
      } 
      if (!isScrollOnBottom) {
        console.log([...(filteredItems.slice(10)), ...items.slice(lastIndexOfItems - 10, lastIndexOfItems)]);
        
        setIndexOfShownTickets(lastIndexOfItems - 10)
        return [...(filteredItems.slice(10)), ...items.slice(lastIndexOfItems - 10, lastIndexOfItems)]
      }
      console.log(filteredItems);
      setIndexOfShownTickets(lastIndexOfItems + 10)
      return  [...(filteredItems.slice(0, 10)), ...items.slice(lastIndexOfItems, lastIndexOfItems + 10)]
  }

  const scrollHandler = (event : any) => {    
      if(event.target.documentElement.scrollTop < 200) {
        const ticketsPortion = loadGradual(items, filteredItems, false)
        setFilteredItems(ticketsPortion)
      }
      if(event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) 
      < 1) {
        const ticketsPortion = loadGradual(items, filteredItems, true)
        setFilteredItems(ticketsPortion)
        /* dispatch(getPortionOfTickets(ticketsPortion)) */
      }    
  }
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {document.removeEventListener('scroll', scrollHandler)}
  })

  useEffect(() => {
    setFilteredItems(sortTickets(filteredItems, priority));
    setFilteredItems(filterTickets(filteredItems, stopsFilter));
  }, [priority, stopsFilter]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [priority, stopsFilter]);

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
