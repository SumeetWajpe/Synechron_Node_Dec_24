import express from "express";
import { courses } from "./models/courses.js";
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.static("public"));

app.get("/courses", (req, res) => {
  return res.json(courses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
