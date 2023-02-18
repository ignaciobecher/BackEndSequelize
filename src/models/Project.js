import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js"; //instancia
import { Task } from "./Task.js";

//DEFINIR TABLA PROJECT:
//define recibe dos parametros: nombre en plural de la tabla y los datos
export const Project = sequelize.define(
  "projects",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    priority: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);

//Defino la relacion uno a muchos
Project.hasMany(Task, {
  //apunto a tabla task
  foreignKey: "projectId", //elemento de la tabla task
  sourceKey: "id", //elemento de la tabla project
});

//Defino relacion muchos a uno
Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
});
