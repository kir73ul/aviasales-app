export enum SortOfTickets {
  cheapest = "cheapest",
  fastest = "fastest",
}
export enum TranslateType {
  cheapest = "Самый дешевый",
  fastest = "Самый быстрый",
}
enum FiltersStateType { }

export interface InitialFiltersStateType {
  [key: string]: boolean;
}
