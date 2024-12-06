import express from "express";
import { courses } from "../models/courses.js";
const router = express.Router();

router.get("/courses", (req, res) => {
  return res.json(courses);
});

router.get("/coursedetails/:id", (req, res) => {
  let courseId = req.params.id;
  let theCourse = courses.find(c => c.id == courseId);
  // coursedetails - html -> send to the client
  res.render("index", { title: "Course details", theCourse });
});

router.post("/newcourse", (req, res) => {
  let newCourse = req.body;
  courses.push(newCourse);
  return res.json({ msg: `The ${newCourse.title} was added successfully !` });
});

export default router;
