import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../combineStore";
import classes from "./transfers-filters.module.scss";
import { toggleAllCheckboxes, toggleCheckbox } from './../../actions';
import { NumbersOfTransfers } from "../../Types/Types";
import { translateNumberOfStops } from './../../Constants/Constants';

export default function TransfersFilters() {
  const stopsFilter = useSelector((state: AppStateType) => state.transfersReducer)
  const dispatch = useDispatch()

  const toggle = (evt: React.ChangeEvent<HTMLFormElement>, key: string) => {
    const { checked } = evt.target;
    console.log(evt);

    if (key === NumbersOfTransfers.all) dispatch(toggleAllCheckboxes(checked));
    else dispatch(toggleCheckbox(key, checked));
  };
  const checkboxes = [
    { key: NumbersOfTransfers.all, value: translateNumberOfStops.all },
    { key:NumbersOfTransfers.zero, value: translateNumberOfStops[0] },
    { key: NumbersOfTransfers.one, value: translateNumberOfStops[1] },
    { key: NumbersOfTransfers.two, value: translateNumberOfStops[2] },
    { key: NumbersOfTransfers.three, value: translateNumberOfStops[3] },
];

  const list = checkboxes.map(({ key, value }) => {
    return (
      <li key={key}>
        <input
          type="checkbox"
          id={value}
          checked={stopsFilter[key]}
          onChange={(evt: any) => toggle(evt, key)}
        />
        <label htmlFor={value} className={classes["custom-checkbox"]}>
          {value}
        </label>
      </li>
    );
  });

  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>Количество пересадок</span>
      <ul className={classes.list}>{list}</ul>
    </div>
  );
}

