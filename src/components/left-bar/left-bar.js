/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import classes from './left-bar.module.scss';

const options = [
  {key: 'all', value: 'Все'},
  {key: 'without', value: 'Без пересадок'},
  {key: 'one', value: 'Одна пересадка'},
  {key: 'two', value: 'Две пересадки'},
  {key: 'three', value: 'Три пересадки'},
];

function LeftBar(tglAll = () => {}, tgl = () => {}) {

const toggle = (key) => {
  // eslint-disable-next-line no-unused-expressions
  (key === 'all') ? tglAll() : tgl(key)
}

const list = options.map (({key, value}) => {
  return (
    <li key={key} onClick={() => toggle(key)}>
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

const mapStateToProps = (state) => ({...state})

const mapDispatchToProps = (dispatch) => {
  const { tgl, tglAll } = bindActionCreators(actions, dispatch)
  return {
    tgl,
    tglAll
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar)
