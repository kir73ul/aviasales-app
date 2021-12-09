import React from "react";
import classes from "./tickets-menu.module.scss";
import { AppStateType } from "../../combineStore";
import { useDispatch, useSelector } from "react-redux";
import { tglPriority } from "../../actions";
import { SortOfTickets, TranslateType } from "../../Types/Types";

const items = [
  { key: SortOfTickets.cheapest, value: TranslateType.cheapest },
  { key: SortOfTickets.fastest, value: TranslateType.fastest },
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
        onClick={() => dispatch(tglPriority(key))
        }
      >
        {value}
      </button>
    )
  });
  return <div className={classes.menu}>{btns} </div>;
}

