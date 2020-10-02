import React from 'react';
import { error } from './tickets-list.module.scss';

export default function NoElems({ isTrue }) {
  return isTrue ? <span className={error}>Sorry! No flights</span> : null;
}
