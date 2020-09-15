const GuestSchema = require('./Guest');
const OrderSchema = require('./Order');
const WaiterSchema = require('./Waiter');
const ManagerSchema = require('./Manager');
const connection = require('./connection');

const Guest = connection.model('Guest', GuestSchema);
const Order = connection.model('Order', OrderSchema);
const Waiter = connection.model('Waiter', WaiterSchema);
const Manager = connection.model('Manager', ManagerSchema);


module.exports = {
  Guest,
  Order,
  Waiter,
  Manager,
};
