import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import protectedRoutes from "./middleware/auth.js";

import connectDB from "./config/db.js";

import authRoutes from "./api/auth.js";
import taskRoutes from "./api/task.js";

//for accessing the .env file
dotenv.config();

const app = express();

//connecting to mongoDB
connectDB();

app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => res.send("Pomodoro Backend!"));
app.use("/auth", authRoutes);
app.use("/tasks", protectedRoutes, taskRoutes);


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, (err) => {
  const port = server.address().port;
  if (err) console.log("Error in server setup");
  console.log(`Server running on ${port}`);
});

export default app;