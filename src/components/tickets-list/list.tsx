import {ticketCreator} from "./helpers/ticketCreator";
import {idBase} from "./helpers/idBase";
import {Ticket} from "../ticket";
import styles from "./tickets-list.module.scss";
import { TicketsType } from "../../Types/Types";
import { useEffect, useRef } from 'react';
import {loadGradual } from "../../reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../combineStore";
import { getPortionOfTickets } from "../../actions";

interface ListType {
  items: TicketsType[];
}

export const List: React.FC<ListType> = ({ items }) => {
/*   const portionOfItems = useSelector((state: AppStateType) => state.ticketsReducer.portionOfItems)
  const ref = useRef() as React.MutableRefObject<HTMLUListElement>
  const dispatch = useDispatch()
  useEffect(() => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      const ticketsPortion = loadGradual(items, portionOfItems, true)
      dispatch(getPortionOfTickets(ticketsPortion))
  }
  }, [window.scrollX]) */
  const elems = items.map((item: TicketsType) => {
    const props = ticketCreator(item);
    const id = idBase.create();
    return <Ticket key={id} {...props} />;
  });

  return <ul /* ref={ref} */ className={styles.container}>{elems}</ul>;
}

