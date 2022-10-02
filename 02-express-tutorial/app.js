// const express = require("express");
// const app = express();
const app = require("express")();

// home page
app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("home page");
});

// Deploying the server on the port 5100
app.listen(5100, () => {
  console.log("server is listening on port 5100...");
});
