export enum SortOfTickets {
  cheapest = "cheapest",
  fastest = "fastest",
}
export enum NumbersOfTransfers {
  all = 'all',
  zero = '0',
  one = '1',
  two = '2',
  three = '3'
}
type TransfersKey = keyof typeof NumbersOfTransfers

export type InitialFiltersStateType = {
  [key: string/* in TransfersKey */]: boolean;
}

export interface TicketsType {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    }
  ]
}
export interface initialTicketsStateType {
  hasErrored: boolean;
  isLoading: boolean;
  items: TicketsType[],
}
export interface TicketCreatorReturnType {
  price: number;
  carrierLogo: string;
  carrier: string;
  origin: string;
  destination: string;
  transfers: string;
  departTime: string;
  arrivalTime: string;
  ftdDuration: string;
  stops: string[];
  originBack: string;
  destinationBack: string;
  transfersBack: string;
  departTimeBack: string;
  arrivalTimeBack: string;
  ftdDurationBack: string;
  stopsBack: string[];
}