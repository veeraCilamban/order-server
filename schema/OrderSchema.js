const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    product: {type: String, required: true},
    address: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    isDelivered: {type: Boolean, required:true, default:false},
    isPaid: {type: Boolean, required:true, default:false}
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
