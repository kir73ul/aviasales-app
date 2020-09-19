export const sortTickets = (tickets, priority) => {
  const totalDuration = ({ segments }) => segments.reduce((acc, current) => acc + current.duration, 0);

  switch (priority) {
    case 'cheapest':
      return tickets.sort((prev, next) => prev.price - next.price);

    case 'fastest':
      return tickets.sort((prev, next) => totalDuration(prev) - totalDuration(next));

    default:
      return tickets;
  }
};

export const filterTickets = (tickets, filterValue) =>
  tickets.filter(({ segments }) => segments.every(({ stops }) => filterValue[stops.length]));
