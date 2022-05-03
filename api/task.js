import express from "express";
import {
  getAllTasks,
  getATask,
  createTask,
  updateTask,
  deleteTask,
  toggleCompletionTask,
} from "../controllers/tasks.js";

const taskRoutes = express.Router();

taskRoutes.get("/", getAllTasks);
taskRoutes.get("/:id", getATask);
taskRoutes.post("/", createTask);
taskRoutes.put("/:id", updateTask);
taskRoutes.patch("/:id", toggleCompletionTask);
taskRoutes.delete("/:id", deleteTask);

export default taskRoutes;
