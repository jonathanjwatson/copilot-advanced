const express = require("express");
const winston = require("winston");

const app = express();
const port = 3000;

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log" })
  ]
});

app.get("/success", (req, res) => {
  res.status(200).send({ message: "Request was successful!" });
});

app.get("/failure", (req, res) => {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    logger.error(error.message);
  }
  res.status(500).send({ message: "An error occurred!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
