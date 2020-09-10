/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import classes from './left-bar.module.scss';


function LeftBar({filter, tglAllCheckboxes, tglCheckbox }) {

  const checkboxes = [
    {key: 'all', value: 'Все'},
    {key: 'without', value: 'Без пересадок'},
    {key: 'one', value: 'Одна пересадка'},
    {key: 'two', value: 'Две пересадки'},
    {key: 'three', value: 'Три пересадки'},
];

  const toggle = (evt, key) => {
    const { checked } = evt.target
    
    if (key === 'all') tglAllCheckboxes(checked)
    else tglCheckbox(key, checked);
  }

const list = checkboxes.map (({ key, value }) => {
  return (
    <li key={key} >
      <label >
        <input 
          type='checkbox' 
          value={value}
          checked={filter[key]} 
          onClick={(evt) => toggle(evt, key)}
        />{value}
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

const mapStateToProps = (state) => ({filter: state})

const mapDispatchToProps = (dispatch) => {
  const { tglCheckbox, tglAllCheckboxes } = bindActionCreators(actions, dispatch)
  return {
    tglCheckbox,
    tglAllCheckboxes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar)
