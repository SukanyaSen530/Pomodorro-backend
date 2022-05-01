import express from "express";
import {
  getAllTasks,
  getATask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";

const taskRoutes = express.Router();

taskRoutes.get("/", getAllTasks);
taskRoutes.put("/:id", getATask);
taskRoutes.post("/", createTask);
taskRoutes.put("/:id", updateTask);
taskRoutes.delete("/:id", deleteTask);

export default taskRoutes;
