import express from "express";
import { courses } from "./models/courses.js";
import coursesRouter from "./routes/courses.routes.js";

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.static("public"));

// view engine
app.set("view engine", "pug");
app.set("views", "./src/views");

// routers
app.use("/", coursesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
