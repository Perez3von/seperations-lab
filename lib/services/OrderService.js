const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');

module.exports = class OrderService {
  //send a text and store the order

  static async createOrder({ quantity }) {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${quantity}`
    );

    //store the order
    const order = await Order.insert({ quantity });

    return order;
  }

  static async allOrders() {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      'Retrieve all orders'
    );

    //store the order
    const orders = await Order.getAllOrders();

    return orders;
  }





};
