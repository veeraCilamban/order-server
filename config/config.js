const mongoose = require("mongoose");

exports.PORT = process.env.PORT
exports.MONGO_DB_URI = process.env.MONGO_DB_URI
exports.ES_SERVER = process.env.ES_SERVER


exports.connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Database connected: ${con.connection.host}`);
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit(1);
  }
};


//mongodb+srv://veera:bow_manoj@e-verification.a8gml.mongodb.net/Orders?retryWrites=true&w=majority
