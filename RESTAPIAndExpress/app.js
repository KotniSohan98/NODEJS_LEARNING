require("dotenv").config();
const express = require("express");

const { logger, logger2 } = require("./middlewares/logger");
const coursesRouter = require("./routes/coursesRoute");
const coursesRouterXML = require("./routes/coursesRouteXml");

const app = express();

app.use(logger);
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v2/courses", coursesRouterXML);
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  //Can we alter the req object -Yes
  //   console.log({ req });
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
