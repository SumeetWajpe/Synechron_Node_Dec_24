const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("Index.html", { root: __dirname });
});
app.get("/styles.css", (req, res) => {
  res.sendFile("styles.css", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
