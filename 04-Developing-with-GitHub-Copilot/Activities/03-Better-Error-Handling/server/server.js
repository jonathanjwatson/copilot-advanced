const express = require("express");

const app = express();
const port = 3000;

app.get("/success", (req, res) => {
  res.status(200).send({ message: "Request was successful!" });
});

app.get("/failure", (req, res) => {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {}
  res.status(500).send({ message: "An error occurred!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
