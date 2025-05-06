const fs = require("fs");

// fs.readFile("./example.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

fs.writeFile("./output.txt", "Hello World from Node.js Script", (err) => {
  if (err) {
    throw err;
  }
  console.log("File Written Successfully");
});
