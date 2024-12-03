const express = require("express");
const app = express();
const port = 3000;

let products = [
  { id: 1, name: "Laptop", price: 100000 },
  { id: 2, name: "Mobile", price: 50000 },
];

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("Index.html", { root: __dirname });
});
app.get("/styles.css", (req, res) => {
  res.sendFile("styles.css", { root: __dirname });
});
app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.send("Posted successfully !");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
