const express = require("express");
const app = express();
const cors = require("cors");
const tripRouter = require("./Routes/trip.routes");
const connectDb = require("./db");
app.use(express.json());
app.use(cors());
app.use("/trip", tripRouter);
app.get("/", (req, res) => {
  res.json({ message: "welcome from server" });
});
app.listen(8000, () => {
  connectDb();
  console.log("server is started at port 8000");
});
