const fs = require("fs");

const readStream = fs.createReadStream("src/Input.txt", "utf-8"); // returns an EventEmitter instance

readStream.on("data", chunk => {
  console.log(">>>>>>>>>>>>>> Chunk received >>>>>>>>>>>>>>>> \n\r");
//   console.log(chunk);
});

readStream.on("end", () => {
  console.log("Reading of the file done.. Stream ended !");
});
