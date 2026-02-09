import express from "express";
import dbConnect from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});
app.listen(PORT, () => {
  dbConnect();
  console.log("Server Running Successfully.");
});
