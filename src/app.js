const express = require("express");

const app = express();

app.get("/upload", (req, res) => {
  res.send("Hello express !! 😉");
});

app.listen(5000, () => {
  console.log("Server is up on port 5000.");
});
