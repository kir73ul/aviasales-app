import { TicketsType } from "../../../Types/Types";

export const ticket : TicketsType = {
  price: 15500,
  carrier: "S7",
  segments: [
    {
      origin: "MOW",
      destination: "BKG",
      date: new Date().toString(),
      stops: ["ASA", "NWD"],
      duration: 1734,
    },
    {
      origin: "BKG",
      destination: "MOW",
      date: new Date(Math.floor(Math.random() * 10000000)).toString(),
      stops: ["ASA"],
      duration: 900,
    },
  ],
};
const mockedServer : TicketsType[] = [];
mockedServer.length = 20;
mockedServer.fill(ticket, 0, 19);

