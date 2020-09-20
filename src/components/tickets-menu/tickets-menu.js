import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
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

const mapStateToProps = ({ priorityFilter }) => ({ priority: priorityFilter });

const mapDispatchToProps = (dispatch) => {
  const { tglPriority } = bindActionCreators(actions, dispatch);
  return {
    tglPriority,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsMenu);

TicketsMenu.propTypes = {
  priority: PropTypes.string.isRequired,
  tglPriority: PropTypes.func.isRequired,
};
