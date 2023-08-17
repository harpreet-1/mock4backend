const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://harpreetllg:harpreetllg@cluster0.4gj2jam.mongodb.net/triptravler?retryWrites=true&w=majority"
    );
    console.log(" db connection done");
  } catch (error) {
    console.log("error in db connection", error);
  }
};
module.exports = connectDb;
