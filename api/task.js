import express from "express";
import {
  getAllTasks,
  getATask,
  createTask,
  updateTask,
  deleteTask,
  toggleCompletionTask,
  updateTags,
} from "../controllers/tasks.js";

const taskRoutes = express.Router();

taskRoutes.get("/", getAllTasks);
taskRoutes.get("/:id", getATask);
taskRoutes.post("/", createTask);
taskRoutes.put("/:id", updateTask);
taskRoutes.put("/completion/:id", toggleCompletionTask);
taskRoutes.put("/tags/:id", updateTags);
taskRoutes.delete("/:id", deleteTask);

export default taskRoutes;
