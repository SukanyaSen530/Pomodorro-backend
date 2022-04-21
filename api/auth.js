import express from "express";
import { registerUser, loginUser } from "../controllers/auth.js";

const authRoutes = express.Router();

authRoutes.post("/signin", loginUser);
authRoutes.post("/signup", registerUser);

export default authRoutes;
