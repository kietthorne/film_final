import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "../src/routes/authRoutes.js";

dotenv.config();
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use('/uploads', express.static('uploads'));

mongoose
  .connect(
    "mongodb+srv://phantuankietdev:123@cluster0.zn2h7ym.mongodb.net/film"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running... ${port}`);
});
