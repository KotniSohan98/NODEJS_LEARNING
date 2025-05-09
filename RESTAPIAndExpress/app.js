require("dotenv").config();
const express = require("express");

const { logger, logger2 } = require("./middlewares/logger");
const { router } = require("./routes/coursesRoute");

const app = express();
app.use(express.json());

app.use(logger);
app.use(router);
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  //Can we alter the req object -Yes
  //   console.log({ req });
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
