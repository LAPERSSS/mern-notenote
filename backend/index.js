const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./server/routes/user.route.js");
const authRoutes = require("./server/routes/auth.route.js");

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server berjalan di port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("anjay");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  res.status(statusCode).json({
    sucess: false,
    statusCode,
    message,
  });
});
