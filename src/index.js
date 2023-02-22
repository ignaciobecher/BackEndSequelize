import app from "./app.js";
import { sequelize } from "./database/database.js";

//Importo las tablas definidas, una vez creadas las tablas, las elimino sino con cada guardado se borran y se crean de nuevo
// import "./models/Project.js";
// import "./models/Task.js";

async function main() {
  // await sequelize.authenticate();
  // console.log(`Base en linea en el puerto ${3000}`);
  await sequelize.sync({ force: false }); //creo las tablas
  app.listen(4000);
  console.log("Servidor en lina en el puerto", 4000);
}

main();
