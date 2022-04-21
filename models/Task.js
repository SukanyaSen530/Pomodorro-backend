import mongoose from "mongoose";
import User from "./User.js";
const { Schema, model } = mongoose;

const TagSchema = mongoose.Schema({
  name: String,
});

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
  tags: [TagSchema],
  isDone: {
    type: Boolean,
    default: false,
  },
  workDuration: {
    type: Number,
    required: [true, "Work duration is required"],
  },
  shortBreakDuration: {
    type: Number,
    required: [true, "Short break duration is required"],
  },
});

const Task = model("task", TaskSchema);

export default Task;
