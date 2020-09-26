const ticket = {
  price: 15500,
  carrier: 'S7',
  segments: [
    {
      origin: 'MOW',
      destination: 'BKG',
      date: new Date() - Math.floor(Math.random() * 10000000),
      stops: ['ASA', 'NWD'],
      duration: 1234,
    },
    {
      origin: 'BKG',
      destination: 'MOW',
      date: new Date() - Math.floor(Math.random() * 10000000),
      stops: ['ASA'],
      duration: 889,
    },
  ],
};
const mockedServer = [];
mockedServer.length = 20;
mockedServer.fill(ticket, 0, 19);

export default mockedServer;
