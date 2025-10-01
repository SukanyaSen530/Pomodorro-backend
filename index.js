import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import protectedRoutes from "./middleware/auth.js";

import connectDB from "./config/db.js";

import authRoutes from "./api/auth.js";
import taskRoutes from "./api/task.js";

dotenv.config();

const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:3000"];

const app = express();

//connecting to mongoDB
connectDB().catch((err) => console.error("Initial DB connection failed:", err));

app.options(
  "*",
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: false }));

app.get("/", (_, res) => res.send("Pomodoro Backend!"));
app.use("/auth", authRoutes);
app.use("/tasks", protectedRoutes, taskRoutes);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
