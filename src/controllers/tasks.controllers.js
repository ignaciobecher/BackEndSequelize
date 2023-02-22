import { emptyQuery } from "pg-protocol/dist/messages.js";
import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasksList = await Task.findAll();
    res.json(tasksList);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const taskCreated = await Task.create({
      name: req.body,
      done: req.body,
      projectId: req.body,
    });
    res.json(taskCreated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = await Task.findByPk({
      where: { id: id },
    });
    task.set(req.body);
    await task.save();
    return updateTask;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.destroy({
      where: { id: id },
    });
    console.log(deleteTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const indTask = await Task.findByPk({
      where: {
        id: id,
      },
    });
    res.json(indTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
