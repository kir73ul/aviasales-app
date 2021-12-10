import React from "react";
import classes from "./tickets-menu.module.scss";
import { AppStateType } from "../../combineStore";
import { useDispatch, useSelector } from "react-redux";
import { togglePriority } from "../../actions";
import { SortOfTickets } from "../../Types/Types";
import { translateSortOfTickets } from './../../Constants/Constants';

const items = [
  { key: SortOfTickets.cheapest, value: translateSortOfTickets.cheapest },
  { key: SortOfTickets.fastest, value: translateSortOfTickets.fastest },
];

export default function TicketsMenu() {
  const priority = useSelector((state: AppStateType) => state.priorityReducer);
  const dispatch = useDispatch()

  const btns = items.map(({ key, value }) => {
    const btnStyle = priority === key ? classes.itemSelected : classes.item;
    return (
      <button
        type="button"
        key={key}
        className={btnStyle}
        onClick={() => dispatch(togglePriority(key))
        }
      >
        {value}
      </button>
    )
  });
  return <div className={classes.menu}>{btns} </div>;
}

