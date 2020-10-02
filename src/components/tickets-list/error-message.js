import React from 'react';
import classes from './tickets-list.module.scss';

export default function ErrorMessage({ hasErrored }) {
  return hasErrored ? <span className={classes.error}>Sorry! There was an error loading the tickets</span> : null;
}
