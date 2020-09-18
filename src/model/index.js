const GuestSchema = require('./Guests');
const OrderSchema = require('./Order');
const WaiterSchema = require('./Waiter');
const GoodsSchema = require('./Goods');
const CommentsSchema = require('./Comments');
const ManagerSchema = require('./Manager');
const connection = require('./connection');

const Guest = connection.model('Guest', GuestSchema);
const Order = connection.model('Order', OrderSchema);
const Waiter = connection.model('Waiter', WaiterSchema);
const Goods = connection.model('Goods', GoodsSchema);
const Comments = connection.model('Comments', CommentsSchema);
const Manager = connection.model('Manager', ManagerSchema);

module.exports = {
  Guest,
  Order,
  Waiter,
  Goods,
  Manager,
  Comments,
};
