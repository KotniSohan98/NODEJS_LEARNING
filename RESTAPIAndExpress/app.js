require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const courses = [
  {
    id: 1,
    name: "node.js",
    rating: 4.5,
    description: "Learn node js",
    instructions: "JC",
    difficulty: "Begineer",
    price: 200,
  },
  {
    id: 2,
    name: "React.js",
    rating: 4.5,
    description: "Learn React js",
    instructions: "JC",
    difficulty: "Begineer",
    price: 200,
  },
  {
    id: 3,
    name: "node.js",
    rating: 4.5,
    description: "Learn node js",
    instructions: "JC",
    difficulty: "Begineer",
    price: 200,
  },
];

const logger = (req, res, next) => {
  console.log(`Logger1: ${req.method}: Request receive on ${req.url}`);
  next();
};
app.use(logger);
app.get("/", (req, res) => {
  //Can we alter the req object -Yes
  //   console.log({ req });
  res.send("Hello World!");
});

app.get("/api/v1/courses", (req, res) => {
  //console.log(req.query); //request gives query object to access the query parameters

  res.send(courses);
});

//path params
app.get("/api/v1/courses/:courseId", (req, res) => {
  const courseId = parseInt(req.params.courseId); //req.params has path params
  const course = courses[courseId];
  if (!course) res.status(404).send({ message: "Course Not Found!" });
  res.send(courses[courseId]);
});

app.post("/api/v1/courses", (req, res) => {
  const course = req.body;
  //Validation Checks

  const id = courses.length + 1; //Ideally we shoud not use generate IDs like this in real world. It dhould be done in Db Level
  course.id = id;
  courses.push(course);
  console.log(course);
  res.send(course);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
