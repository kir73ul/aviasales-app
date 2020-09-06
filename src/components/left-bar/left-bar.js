import React from 'react';
import classes from './left-bar.module.scss';

const options = [
  {key: 'all', value: 'Все'},
  {key: 'without', value: 'Без пересадок'},
  {key: 'one', value: 'Одна пересадка'},
  {key: 'two', value: 'Две пересадки'},
  {key: 'three', value: 'Три пересадки'},
];

export default function LeftBar() {

const list = options.map (({key, value}) => {
  return (
    <li key={key}>
      <label>
        <input type='checkbox' value={value}/>{value}
      </label>
    </li>
  )
})

  return (
    <div className={classes.wrapper}>
      <span>Количество пересадок</span>
      <ul className={classes.list}>
        {list}
      </ul>
    </div>
  );
}
