import { Router } from "express";
import {
  getProjects,
  createProjects,
  updateProject,
  deleteProject,
} from "../controllers/projects.controller.js";
const router = Router();

router.get("/projects", getProjects); //ver proyecto
router.post("/projects", createProjects); //crear proyecto
router.put("/projects/:id", updateProject); //actualizar proyecto
router.delete("/projects/:id", deleteProject); //borrar proyecto
router.get("/projects/id"); //ver proyecto especifico

export default router;
