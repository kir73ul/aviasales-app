import React from "react";
import PropTypes from "prop-types";
import ticketCreator from "./helpers/ticketCreator";
import idBase from "./helpers/idBase";
import Ticket from "../ticket";
import { container } from "./tickets-list.module.scss";

export default function List({ items }) {
  const elems = items.map((item) => {
    const props = ticketCreator(item);
    const id = idBase.create();
    return <Ticket key={id} {...props} />;
  });

  return <ul className={container}>{elems}</ul>;
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
