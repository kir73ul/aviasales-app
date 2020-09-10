/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import classes from './tickets-menu.module.scss';

function TicketsMenu({ priority, tglPriority }) {
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

const mapStateToProps = (state) => ({ priority: state.priority });

const mapDispatchToProps = (dispatch) => {
  const { tglPriority } = bindActionCreators(actions, dispatch);
  return {
    tglPriority,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsMenu);
