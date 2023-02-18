import { Router } from "express";
import {
  getProjects,
  createProjects,
} from "../controllers/projects.controller.js";
const router = Router();

router.get("/projects", getProjects); //ver proyecto
router.post("/projects", createProjects); //crear proyecto
router.put("/projects/:id"); //actualizar proyecto
router.delete("/projects/:id"); //borrar proyecto
router.get("/projects/id"); //ver proyecto especifico

export default router;
