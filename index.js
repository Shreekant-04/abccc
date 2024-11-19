const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/name", (req, res) => {
  res.send("Name route");
});
app.get("/profile", (req, res) => {
  res.send("Profile route");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
