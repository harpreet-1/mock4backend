const mongoose = require("mongoose");
const tripSchema = new mongoose.Schema({
  Name: { type: String, require: true },
  Email: { type: String, require: true },
  Destination: { type: String, require: true },
  travelers: { type: Number, require: true },
  BudgetPerPerson: { type: Number, require: true },
});

const TripModel = mongoose.model("Trip", tripSchema);

module.exports = TripModel;
