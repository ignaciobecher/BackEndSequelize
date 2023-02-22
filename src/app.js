import express from "express";
import ejs from "ejs";
import projectRoutes from "./routes/projects.routes.js";

const app = express();

app.use(projectRoutes);
app.use(express.json());

app.get("/");

export default app;
