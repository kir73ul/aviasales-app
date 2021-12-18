import { NumbersOfTransfers } from "../Types/Types";

export const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";
export const TOGGLE_ALL_CHECKBOXES = "TOGGLE_ALL_CHECKBOXES";
export const TOGGLE_PRIORITY = "TOGGLE_PRIORITY";
export const ITEMS_HAS_ERRORED = "ITEMS_HAS_ERRORED";
export const ITEMS_IS_LOADING = "ITEMS_IS_LOADING";
export const ITEMS_FETCH_DATA_SUCCESS = "ITEMS_FETCH_DATA_SUCCESS";

export const translateSortOfTickets = {
    cheapest: "Самый дешевый",
    fastest: "Самый быстрый",
}
export const translateNumberOfStops = {
    [NumbersOfTransfers.all]: "Все",
    [NumbersOfTransfers.zero]: "Без пересадок",
    [NumbersOfTransfers.one]: "Одна пересадка",
    [NumbersOfTransfers.two]: "Две пересадки",
    [NumbersOfTransfers.three]: "Три пересадки"
}
export const url = {
    searchID : 'https://front-test.beta.aviasales.ru/search',
    tickets:'https://front-test.beta.aviasales.ru/tickets?searchId=', 
    carrierLogo: 'https://pics.avs.io/99/36/carrier.png'
}
