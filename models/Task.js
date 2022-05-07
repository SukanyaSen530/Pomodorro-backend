import mongoose from "mongoose";
import User from "./User.js";
const { Schema, model } = mongoose;

const TaskSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User Id is required!"],
    ref: User,
    select: false,
  },
  title: {
    type: String,
    required: [true, "Task title is required"],
  },
  description: {
    type: String,
    required: [true, "Task description is required"],
  },
  tags: [String],
  isDone: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
  workDuration: {
    type: Number,
    required: [true, "Work duration is required"],
  },
  shortBreakDuration: {
    type: Number,
    required: [true, "Short break duration is required"],
  },
  longBreakDuration: {
    type: Number,
    required: [true, "Long break duration is required"],
  },
});

const Task = model("task", TaskSchema);

export default Task;
