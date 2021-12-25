import React from "react";
import styles from "./tickets-list.module.scss";
import { useSelector } from 'react-redux';
import { AppStateType } from "../../combineStore";

export  const ErrorMessage = ()  => {
  const hasErrored = useSelector((state: AppStateType) => state.ticketsReducer.hasErrored)

  return hasErrored
    ? (<div className={styles.error} > Sorry! There was an error loading the tickets </div>)
    : null;
}

