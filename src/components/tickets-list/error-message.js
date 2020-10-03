import React from 'react';
import PropTypes from 'prop-types';
import { error } from './tickets-list.module.scss';

export default function ErrorMessage({ hasErrored }) {
  return hasErrored ? <div className={error}>Sorry! There was an error loading the tickets</div> : null;
}

ErrorMessage.propTypes = {
  hasErrored: PropTypes.bool.isRequired,
};
