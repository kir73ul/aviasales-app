import React from 'react';
import PropTypes from 'prop-types';
import { error } from './tickets-list.module.scss';

export default function ErrorMessage({ hasErrored }) {
  return hasErrored ? <span className={error}>Sorry! There was an error loading the tickets</span> : null;
}

ErrorMessage.propTypes = {
  hasErrored: PropTypes.bool.isRequired,
};
