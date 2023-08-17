const express = require("express");
const TripModel = require("../Models/TripModel");
const tripRouter = express.Router();

tripRouter.post("/", async (req, res) => {
  try {
    let { Name, Email, Destination, travelers, BudgetPerPerson } = req.body;
    console.log({ Name, Email, Destination, travelers, BudgetPerPerson });
    if (!Name || !Email || !Destination || !travelers || !BudgetPerPerson) {
      return res.status(400).json({ error: "please provide all deatils" });
    }
    let trip = await TripModel.create({
      Name,
      Email,
      Destination,
      travelers,
      BudgetPerPerson,
    });

    return res.status(201).json({ message: "new trip added", trip });
  } catch (error) {
    console.log("error from post trip***********", error);
    return res
      .status(500)
      .json({ message: "something went wrong try again later" });
  }
});
tripRouter.get("/", async (req, res) => {
  try {
    let { sort, order, destination } = req.query;
    let query = {};
    if (destination) {
      query.Destination = destination;
    }
    let trips = TripModel.find(query);
    if (order) {
      trips.sort({ BudgetPerPerson: order });
    }
    trips = await trips;
    return res.status(201).json(trips);
  } catch (error) {
    console.log("error from get trips***********", error);
    return res
      .status(500)
      .json({ message: "something went wrong try again later" });
  }
});
tripRouter.delete("/:id", async (req, res) => {
  try {
    let trips = await TripModel.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: "Trip Deleted" });
  } catch (error) {
    console.log("error from delete trips***********", error);
    return res
      .status(500)
      .json({ message: "something went wrong try again later" });
  }
});

module.exports = tripRouter;
