/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
/* import PropTypes from "prop-types";
 */ import classes from "./transfers-filters.module.scss";

interface TransfersFiltersType {
  stopsFilter: any;
  tglAllCheckboxes: (param: boolean) => void;
  tglCheckbox: (key: string, param: boolean) => void;
}
export default function TransfersFilters({
  stopsFilter,
  tglAllCheckboxes,
  tglCheckbox,
}: TransfersFiltersType) {
  const checkboxes = [
    { key: "all", value: "Все" },
    { key: "0", value: "Без пересадок" },
    { key: "1", value: "Одна пересадка" },
    { key: "2", value: "Две пересадки" },
    { key: "3", value: "Три пересадки" },
  ];

  const toggle = (evt: React.ChangeEvent<HTMLFormElement>, key: string) => {
    const { checked } = evt.target;
    console.log(evt);

    if (key === "all") tglAllCheckboxes(checked);
    else tglCheckbox(key, checked);
  };

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

/* TransfersFilters.propTypes = {
  stopsFilter: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  tglAllCheckboxes: PropTypes.func.isRequired,
  tglCheckbox: PropTypes.func.isRequired,
};
 */
