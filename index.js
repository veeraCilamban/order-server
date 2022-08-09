const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const {connectDB, PORT} = require("./config/config");
const orderRouter = require("./routers/orderRouter");


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/order", orderRouter);


connectDB();

app.listen(PORT || 8081, () => {
  console.log(`Order Service is running on port ${PORT}`);
});

// module.exports = app
