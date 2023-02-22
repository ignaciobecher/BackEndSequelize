import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();

    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id: id,
      },
    });
    res.send(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProjects = async (req, res) => {
  const name = req.body;
  const priority = req.body;
  const description = req.body;
  try {
    const newProject = await Project.create({
      //consulta a bd, asincrona
      name: name,
      priority: priority,
      description: description,
    });
    console.log(newProject);
    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    //Obtengo los datos y actualizo los mismo
    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;

    //Guardo los datos
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findAll({
      where: {
        projectId: id,
      },
    });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
