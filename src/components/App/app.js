import React from 'react';
import classes from './app.module.scss';
import AppHeader from '../app-header';
import LeftBar from '../left-bar';
import TicketsContent from '../tickets-content';

export default function App() {
  return (
    <div className={classes.app}>
      <AppHeader />
      <div className={classes.flexbox} >
        <LeftBar />
        <TicketsContent />
      </div>
    </div>
  );
}
