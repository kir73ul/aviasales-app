import React from 'react';
import PropTypes from 'prop-types';
import classes from './tickets-menu.module.scss';

export default function TicketsMenu({ priority, tglPriority }) {
  const items = [
    { key: 'cheapest', value: 'Самый дешевый' },
    { key: 'fastest', value: 'Самый быстрый' },
  ];

  const btns = items.map(({ key, value }) => {
    const btnStyle = priority === key ? classes.itemSelected : classes.item;
    return (
      <button type="button" key={key} className={btnStyle} onClick={() => tglPriority(key)}>
        {value}
      </button>
    );
  });

  return <div className={classes.menu}>{btns}</div>;
}

TicketsMenu.propTypes = {
  priority: PropTypes.string.isRequired,
  tglPriority: PropTypes.func.isRequired,
};
