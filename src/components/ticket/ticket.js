import React from "react";
import PropTypes from "prop-types";
import classes from "./tickets.module.scss";

export default function Ticket(props) {
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

Ticket.propTypes = {
  price: PropTypes.number.isRequired,
  carrierLogo: PropTypes.string.isRequired,
  carrier: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  transfers: PropTypes.string.isRequired,
  departTime: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
  ftdDuration: PropTypes.string.isRequired,
  stops: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  originBack: PropTypes.string.isRequired,
  destinationBack: PropTypes.string.isRequired,
  transfersBack: PropTypes.string.isRequired,
  departTimeBack: PropTypes.string.isRequired,
  arrivalTimeBack: PropTypes.string.isRequired,
  ftdDurationBack: PropTypes.string.isRequired,
  stopsBack: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
