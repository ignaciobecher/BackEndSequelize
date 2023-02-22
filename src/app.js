import express from "express";
import ejs from "ejs";
import projectRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(taskRoutes);
app.use(projectRoutes);
app.use(express.json());

app.get("/");

export default app;
