import { SortOfTickets, TicketsType } from "../../../Types/Types";
import { InitialFiltersStateType } from './../../../Types/Types';

export const sortTickets = (tickets: TicketsType[], priority: SortOfTickets): TicketsType[] => {
  const totalDuration = ({ segments }: Pick<TicketsType, "segments">) =>
    segments.reduce((acc, { duration }) => acc + duration, 0);

  switch (priority) {
    case SortOfTickets.cheapest:
      return tickets.sort((prev, next) => prev.price - next.price);

    case SortOfTickets.fastest:
      return tickets.sort(
        (prev, next) => totalDuration(prev) - totalDuration(next)
      );

    default:
      return tickets;
  }
};

export const filterTickets = (tickets: TicketsType[], filterValue: InitialFiltersStateType): TicketsType[] =>
  tickets.filter(({ segments }) =>
    segments.every(({ stops }) => filterValue[stops.length])
  );
