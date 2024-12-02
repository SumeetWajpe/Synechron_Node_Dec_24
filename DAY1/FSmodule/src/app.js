const fs = require("fs");

console.log("Started..");

// Non-blocking approach
// fs.readFile("src/Input.txt", "utf-8", (err, dataFromTheFile) => {
//   if (err) console.log(err);
//   console.log(dataFromTheFile);
// });

// Blocking
const contents = fs.readFileSync("src/Input.txt", "utf-8");
console.log(contents);

console.log("Ended..");
