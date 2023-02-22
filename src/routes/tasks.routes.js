import { Router } from "express";
import {
  getTasks,
  createTask,
  getOneTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks/show", getTasks);
router.post("/tasks/create", createTask);
router.put("/tasks/update/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks/:id", getOneTask);

export default router;
