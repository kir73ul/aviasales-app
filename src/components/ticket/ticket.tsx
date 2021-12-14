import React from "react";
import classes from "./tickets.module.scss";
import { TicketCreatorReturnType } from './../tickets-list/helpers/ticketCreator';

export default function Ticket(props: TicketCreatorReturnType) {
  const {
    price,
    carrierLogo,
    carrier,
    origin,
    destination,
    transfers,
    departTime,
    arrivalTime,
    ftdDuration,
    stops,
    originBack,
    destinationBack,
    transfersBack,
    departTimeBack,
    arrivalTimeBack,
    ftdDurationBack,
    stopsBack,
  } = props;

  return (
    <li className={classes["card-ticket"]}>
      <span className={classes.price}>{price} RUB</span>
      <img className={classes.airline} src={carrierLogo} alt={carrier} />
      <span className={classes.subtitle}>
        {origin} - {destination}
      </span>
      <span className={classes.subtitle}>в пути</span>
      <span className={classes.subtitle}>{transfers}</span>
      <span className={classes.date}>
        {departTime} - {arrivalTime}
      </span>
      <span className={classes.parametr}>{ftdDuration}</span>
      <span className={classes.parametr}>{stops.join(", ")}</span>
      <span className={classes.subtitle}>
        {originBack} - {destinationBack}
      </span>
      <span className={classes.subtitle}>в пути</span>
      <span className={classes.subtitle}>{transfersBack}</span>
      <span className={classes.date}>
        {departTimeBack} - {arrivalTimeBack}
      </span>
      <span className={classes.parametr}>{ftdDurationBack}</span>
      <span className={classes.parametr}>{stopsBack.join(", ")}</span>
    </li>
  );
}
