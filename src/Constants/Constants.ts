import { NumbersOfTransfers } from "../Types/Types";

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
