export default function transfersHandler(stops) {
  switch (stops) {
    case 1:
      return `1 пересадка`;
    case 2:
    case 3:
    case 4:
      return `${stops} пересадки`;
    default:
      return `${stops} пересадок`;
  }
}
