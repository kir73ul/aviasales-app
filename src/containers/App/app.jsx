import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import classes from "./app.module.scss";
import logo from "./Logo.png";

import TransfersFilters from "../../components/transfers-filters";
import TicketsMenu from "../../components/tickets-menu";
import TicketsList from "../../components/tickets-list";

function App({
  items,
  hasErrored,
  isLoading,
  stopsFilter,
  priority,
  tglCheckbox,
  tglAllCheckboxes,
  tglPriority,
  fetchData,
}) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={classes.app}>
      <div className={classes.cover} />
      <div className={classes["logo-wrapper"]}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className={classes["main-wrapper"]}>
        <TransfersFilters
          stopsFilter={stopsFilter}
          tglCheckbox={tglCheckbox}
          tglAllCheckboxes={tglAllCheckboxes}
        />
        <div className={classes["sub-wrapper"]}>
          <TicketsMenu priority={priority} tglPriority={tglPriority} />
          <TicketsList
            items={items}
            hasErrored={hasErrored}
            isLoading={isLoading}
            stopsFilter={stopsFilter}
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({
  ticketsReducer,
  transfersReducer,
  priorityReducer,
}) => {
  const { items, hasErrored, isLoading } = ticketsReducer;
  return {
    items,
    hasErrored,
    isLoading,
    stopsFilter: transfersReducer,
    priority: priorityReducer,
  };
};
//changing
const mapDispatchToProps = (dispatch) => {
  const {
    tglCheckbox,
    tglAllCheckboxes,
    tglPriority,
    itemsFetchData: fetchData,
  } = bindActionCreators(actions, dispatch);

  return {
    tglCheckbox,
    tglAllCheckboxes,
    tglPriority,
    fetchData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  fetchData: PropTypes.func.isRequired,
  stopsFilter: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  priority: PropTypes.string.isRequired,
  tglPriority: PropTypes.func.isRequired,
  tglAllCheckboxes: PropTypes.func.isRequired,
  tglCheckbox: PropTypes.func.isRequired,
};
