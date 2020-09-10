import React from 'react';
import classes from './app-header.module.scss';
import plane from './Plane.png';

export default function AppHeader() {
  return (
    <div className={classes.wrapper}>
      <a href="#">
        <img src={plane} alt="logo" className={classes.logo} />
      </a>
    </div>
  );
}
