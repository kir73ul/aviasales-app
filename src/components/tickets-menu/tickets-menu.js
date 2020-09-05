/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import classes from './tickets-menu.module.scss';

export default function TicketsMenu({ mode, onClickMenu }) {
  const items = [
    { key: 'cheapest', value: 'Самый дешевый' },
    { key: 'fastest', value: 'Самый быстрый' },
  ];

  const btns = items.map(({ key, value }) => {
    const btnStyle = mode === key ? classes.itemSelected : classes.item;
    return (
      <button type="button" key={key} name={key} className={btnStyle}>
        {value}
      </button>
    );
  });

  return (
    <div onClick={(evt) => onClickMenu(evt.target.name)} className={classes.menu}>
      {btns}
    </div>
  );
}
