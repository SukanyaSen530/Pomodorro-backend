import mongoose from "mongoose";
import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  const userID = req.user._id;

  try {
    const tasksData = await Task.find({ user: userID });

    return res.status(200).json({ tasks: tasksData || [] });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const getATask = async (req, res) => {
  const { id } = req.params;
  try {
    const taskData = await Task.find({ _id: id });

    return res.status(200).json({ task: taskData });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const createTask = async (req, res) => {
  const userID = req.user._id;

  const newTask = new Task({ user: userID, ...req.body });

  try {
    await newTask.save();

    res.status(201).json({ success: true, task: newTask });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res
      .status(404)
      .send({ success: false, message: `No task found with id: ${id}` });

  const updatedTask = req.body;

  try {
    const newUpdatedTask = await Task.findByIdAndUpdate(id, updatedTask, {
      upsert: true,
      new: true,
    });

    res.status(200).json({ success: true, task: newUpdatedTask });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const toggleCompletionTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res
      .status(404)
      .send({ success: false, message: `No task found with id: ${id}` });

  const taskData = await Task.find({ _id: id });

  try {
    await Task.findByIdAndUpdate(id, {
      ...taskData,
      isDone: !taskData.isDone,
    });

    res.status(200).json({ success: true, id: id });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const updateTags = async (req, res) => {
  const { id } = req.params;
  const { tags: updatedTags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    res
      .status(404)
      .send({ success: false, message: `No task found with id: ${id}` });

  const taskData = await Task.find({ _id: id });
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        ...taskData,
        tags: updatedTags,
      },
      {
        upsert: true,
        new: true,
      }
    );
    res.status(200).json({ success: true, task: updatedTask });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res
      .status(404)
      .send({ success: false, message: `No Task found with id: ${id}` });

  try {
    await Task.findByIdAndRemove(id);

    res.status(200).json({ success: true, id: id });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

