import express from "express";
import { getUserById, registerUser, loginUser } from "../controllers/auth.js";

import protectedRoutes from "../middleware/auth.js";

const userRoutes = express.Router();

userRoutes.get("/user", protectedRoutes, getUserById);
userRoutes.post("/signin", loginUser);
userRoutes.post("/signup", registerUser);

export default userRoutes;
