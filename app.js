const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const appModules = require("./modules");

const app = express();

const API_VERSION = process.env.API_VERSION || "v1";
const API_PREFIX = `/api/${API_VERSION}`;
const PORT = process.env.PORT || 4200;

process.env.NODE_ENV === "development" && app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

appModules.forEach((m) => {
  const { name, router } = m;
  app.use(`${API_PREFIX}/${name}`, router);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

module.exports = app;
