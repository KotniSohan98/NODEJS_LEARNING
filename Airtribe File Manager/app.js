const { log } = require("console");
const fs = require("fs");

const inputFilePath = "./AFM-source/input.txt";
const outputFilePath = "./AFM-destination/output.txt";
//Read File Synchronously and Write File Synchronously
// const data = fs.readFileSync(inputFilePath, "utf-8");
// fs.writeFileSync(outputFilePath, data); //If the file exists: it will overwrite the existing content with the new data (⚠️ not append).if you want to append then use appendFileSync

//Read and Write FIle Asynchnously.
// fs.readFile(inputFilePath, "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error reading FIle:", err);
//     return;
//   }
//   console.log(data);
//   fs.writeFile(outputFilePath, data, (err) => {
//     if (err) {
//       console.error("Error writing File:", err);
//       return;
//     }
//     console.log("File Written Successfully");
//   });
// });

// function readSyncWriteAsync() {
//   try {
//     const data = fs.readFileSync(inputFilePath, "utf-8");
//     console.log(data);

//     fs.writeFile(outputFilePath, data.toUpperCase(), "utf-8", (err) => {
//       if (err) {
//         console.error("Write Error:", err);
//       }
//       console.log("File Written Asynchrounously");
//     });
//   } catch (error) {
//     console.error("Read Error", error);
//   }
// }

// readSyncWriteAsync();

function readAsyncWriteSync() {
  fs.readFile(inputFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Read Error:", err);
    }
    console.log(data);
    try {
      fs.writeFileSync(outputFilePath, data, "utf-8");
      console.log("File Written Synchronously");
    } catch (error) {
      console.error("Write Error:", error);
    }
  });
}

readAsyncWriteSync();
