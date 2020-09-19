import { formatDate, formatDuration } from './formatDate';
import transfersHandler from './transfers-handler';

const MSEC_IN_MIN = 60000;

function createTicketProps(item) {
  const { price, carrier, segments } = item;

  const { origin, destination, date, stops, duration } = segments[0];
  const {
    origin: originBack,
    destination: destinationBack,
    date: dateBack,
    stops: stopsBack,
    duration: durationBack,
  } = segments[1];

  const departTime = formatDate(date);
  const departTimeBack = formatDate(dateBack);
  const arrive = Date.parse(date) + duration * MSEC_IN_MIN;
  const arriveBack = Date.parse(dateBack) + duration * MSEC_IN_MIN;
  const arrivalTime = formatDate(arrive);
  const arrivalTimeBack = formatDate(arriveBack);
  const ftdDuration = formatDuration(duration);
  const ftdDurationBack = formatDuration(durationBack);
  const transfers = transfersHandler(stops.length);
  const transfersBack = transfersHandler(stopsBack.length);

  const carrierLogo = `https://pics.avs.io/99/36/${carrier}.png`;

  const ticketProps = {
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
  };

  return ticketProps;
}

const ticketCreator = createTicketProps;
export default ticketCreator;
