const fs = require("fs");

const readStream = fs.createReadStream("src/Input.txt", "utf-8"); // returns an EventEmitter instance
const writeStream = fs.createWriteStream("src/Output.txt", "utf-8"); // returns an EventEmitter instance
// let dataToBeWritten = "";

// readStream.on("data", chunk => {
//   console.log(">>>>>>>>>>>>>> Chunk received >>>>>>>>>>>>>>>> \n\r");
//   dataToBeWritten += chunk;
// });

// readStream.on("end", () => {
//   console.log(
//     "Reading of the file done.. Read Stream ended - Now writing the file - Output.txt!",
//   );

//   writeStream.write(dataToBeWritten);
// });


readStream.pipe(writeStream);
