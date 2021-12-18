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
export type TransfersKey = keyof typeof NumbersOfTransfers

export type InitialFiltersStateType = {
  [key : string/* in NumbersOfTransfers */]: boolean;
}
export interface SegmentType {
  origin: string
  destination: string
  date: string
  stops: string[]
  duration: number
}
export interface TicketsType {
  price: number
  carrier: string
  segments: [SegmentType, SegmentType]
}
export interface initialTicketsStateType {
  hasErrored: boolean;
  isLoading: boolean;
  items: TicketsType[],
}
