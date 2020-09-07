/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators,  } from 'redux';
import * as actions from '../../actions';
import classes from './left-bar.module.scss';


function LeftBar({state, tglAll, tgl }) {

const toggle = (key) => {
  tgl(key);
  if (key === 'all') tglAll()
}

const list = state.map (({key, value, selected}) => {
  return (
    <li key={key} onClick={() => toggle(key)}>
      <label>
        <input type='checkbox' value={value} checked={selected}/>{value}
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

const mapStateToProps = (state) => ({state})

const mapDispatchToProps = (dispatch) => {
  const { tgl, tglAll } = bindActionCreators(actions, dispatch)
  return {
    tgl,
    tglAll
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar)
