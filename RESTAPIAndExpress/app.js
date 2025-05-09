const express = require("express");

const app = express();

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

app.listen(3000, () => {
  console.log("Server stared on port", 3000);
});
