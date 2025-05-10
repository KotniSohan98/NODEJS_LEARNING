const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  getCourseById,
  createCourse,
} = require("../controllers/coursesController");
router.use(express.json());

router.get("/", getAllCourses);
//path params
router.get("/:courseId", getCourseById);
router.post("/", createCourse);

module.exports = router;
