const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const db = require("./models/index");

const app = express();

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    //db.sequelize.sync({ alter: true });
    console.log(`Server is up and running on PORT ${PORT}`);
  });
};

setupAndStartServer();

//ignore this line
