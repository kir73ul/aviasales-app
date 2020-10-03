import React from 'react';
import classes from './app-logo.module.scss';
import logo from './Logo.png';

export default function AppLogo() {
  return (
    <div className={classes.wrapper}>
      <a href="/">
        <img src={logo} alt="logo" className={classes.logo} />
      </a>
    </div>
  );
}
