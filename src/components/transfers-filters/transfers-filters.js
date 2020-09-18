/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import classes from './transfers-filters.module.scss';

function TransfersFilters({ switcher, tglAllCheckboxes, tglCheckbox }) {
  const checkboxes = [
    { key: 'all', value: 'Все' },
    { key: '0', value: 'Без пересадок' },
    { key: '1', value: 'Одна пересадка' },
    { key: '2', value: 'Две пересадки' },
    { key: '3', value: 'Три пересадки' },
  ];

  const toggle = (evt, key) => {
    const { checked } = evt.target;

    if (key === 'all') tglAllCheckboxes(checked);
    else tglCheckbox(key, checked);
  };

  const list = checkboxes.map(({ key, value }) => {
    return (
      <li key={key}>
        <label>
          <input type="checkbox" value={value} checked={switcher[key]} onClick={(evt) => toggle(evt, key)} />
          {value}
        </label>
      </li>
    );
  });

  return (
    <div className={classes.wrapper}>
      <span>Количество пересадок</span>
      <ul className={classes.list}>{list}</ul>
    </div>
  );
}

const mapStateToProps = ({ transfersFilter }) => ({ switcher: transfersFilter });

const mapDispatchToProps = (dispatch) => {
  const { tglCheckbox, tglAllCheckboxes } = bindActionCreators(actions, dispatch);
  return {
    tglCheckbox,
    tglAllCheckboxes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransfersFilters);
