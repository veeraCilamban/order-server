const Order = require("../schema/OrderSchema");

class OrderController {
  async CreateOrder(req, res) {
    const { product, address, totalPrice } = req.body;
    const order = await Order.create({
      product: product,
      address: address,
      totalPrice: totalPrice,
      isPaid: req.body.isPaid ? req.body.isPaid : false,
    });
    if (!order) return res.status(500).send("Order cannot be created!");
    return res.status(201).json(order);
  }
  async GetOrders(req, res) {
    const orders = await Order.find();
    if (orders) {
      return res.status(200).json(orders);
    } else {
      return res.status(404).send("No order found!");
    }
  }
  async updateOrders(req, res) {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(400).send("Order not found!");
    order.isPaid = req.body.isPaid ? req.body.isPaid : false;
    order.isDelivered = req.body.isDelivered ? req.body.isDelivered : false;
    try {
      await order.save();
      return res.status(200).send("Order updated!");
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }
  async deleteOrders(req, res) {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(400).send("Order not found!");
    try {
      await Order.findByIdAndDelete(req.params.id);
      return res.status(200).send("Order has been deleted!");
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }
}

module.exports = OrderController;
