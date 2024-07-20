const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());

//ENV CONFIG
dotenv.config();

//routes
const userRoutes = require("./route/userRoute");
app.use(userRoutes);

const URL =
   "mongodb+srv:";
const connectDb = async () => {
   await mongoose
      .connect(URL, {})
      .then(() => {
         console.log("Mongoose Connection established");
      })
      .catch((error) => {
         console.log("---error", error);
      });
};
connectDb();

app.get("/", (req, res) => {
   res.send("Hello server");
});

app.listen(8000, () => {
   console.log("server running on port 8000");
});
