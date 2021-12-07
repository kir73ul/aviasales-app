export enum SortOfTickets {
  cheapest = "cheapest",
  fastest = "fastest",
}
enum FiltersStateType {}

export interface InitialFiltersStateType {
  [key: string]: boolean;
}
