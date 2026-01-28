const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const apiRouter = require("./routes/api-router");
const comicsRouter = require("./routes/comics-router");
const commentsRouter = require("./routes/comments-router");
const {
  generalErrorHandler,
  postgresErrorHandler,
  customErrorHandler,
} = require("./errors");

app.use(express.json());

app.use("/api", apiRouter);
app.use("/api/comics", comicsRouter);
app.use("/api/comments", commentsRouter);

app.all("*", generalErrorHandler);

app.use(postgresErrorHandler);

app.use(customErrorHandler);

module.exports = app;
