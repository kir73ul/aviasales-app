import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
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
        <div className={classes['custom-checkbox']}>
          <input type="checkbox" id={value} checked={switcher[key]} onChange={(evt) => toggle(evt, key)} />
          <label htmlFor={value}>{value}</label>
        </div>
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

const mapStateToProps = ({ transfersReducer }) => ({ switcher: transfersReducer });

const mapDispatchToProps = (dispatch) => {
  const { tglCheckbox, tglAllCheckboxes } = bindActionCreators(actions, dispatch);
  return {
    tglCheckbox,
    tglAllCheckboxes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransfersFilters);

TransfersFilters.propTypes = {
  switcher: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  tglAllCheckboxes: PropTypes.func.isRequired,
  tglCheckbox: PropTypes.func.isRequired,
};
