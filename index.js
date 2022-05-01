import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";

import { protectedRoutes } from "./middleware/auth.js";

import connectDB from "./config/db.js";

import authRoutes from "./api/auth.js";
import taskRoutes from "./api/task.js";

//for accessing the .env file
dotenv.config();

const app = express();

//connecting to mongoDB
connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      // sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
      // httpOnly: true,
    },
  })
);
app.use(express.json());
app.set("trust proxy", 1);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  process.nextTick(() => cb(null, user));
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => cb(null, user));
});

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