import React from "react";
import PropTypes from "prop-types";
import { error } from "./tickets-list.module.scss";

export default function NoElems({ isTrue }) {
  return isTrue ? <div className={error}>Sorry! No flights</div> : null;
}

NoElems.propTypes = {
  isTrue: PropTypes.bool.isRequired,
};
