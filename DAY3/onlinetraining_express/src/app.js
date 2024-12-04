import express from "express";
import { courses } from "./models/courses.js";
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.static("public"));

// view engine
app.set("view engine", "pug");
app.set("views", "./src/views");

app.get("/courses", (req, res) => {
  return res.json(courses);
});

app.get("/coursedetails/:id", (req, res) => {
  let courseId = req.params.id;
  let theCourse = courses.find(c => c.id == courseId);
  // coursedetails - html -> send to the client
  res.render("index", { title: "Course details", theCourse });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
