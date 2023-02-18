import Sequelize from "sequelize";

//Conexion con sequelize
export const sequelize = new Sequelize("projectsdb", "postgres", "ignacio", {
  //1° base de datos| 2° usuario| 3° contra
  host: "localhost",
  dialect: "postgres",
});
