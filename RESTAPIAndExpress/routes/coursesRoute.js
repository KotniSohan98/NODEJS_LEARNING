const express = require("express");
const router = express.Router();
const { courses } = require("../models/coursesModels");

router.get("/api/v1/courses", (req, res) => {
  //console.log(req.query); //request gives query object to access the query parameters

  res.send(courses);
});

//path params
router.get("/api/v1/courses/:courseId", (req, res) => {
  const courseId = parseInt(req.params.courseId); //req.params has path params
  const course = courses[courseId];
  if (!course) res.status(404).send({ message: "Course Not Found!" });
  res.send(courses[courseId]);
});

router.post("/api/v1/courses", (req, res) => {
  const course = req.body;
  //Validation Checks

  const id = courses.length + 1; //Ideally we shoud not use generate IDs like this in real world. It dhould be done in Db Level
  course.id = id;
  courses.push(course);
  console.log(course);
  res.send(course);
});

module.exports = { router };
