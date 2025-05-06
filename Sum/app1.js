const path = require("path");
const fs = require("fs");
console.log(path.extname("index.html"));

const filePath = path.join("data", "text", "example.text");
console.log(filePath);

fs.readFile(filePath, "utf-8", (err, data) => {
  console.log(data);
});
