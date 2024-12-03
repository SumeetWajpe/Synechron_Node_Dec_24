const { createServer } = require("node:http"); // builtin
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;
const readStream = fs.createReadStream("src/Index.html", "utf-8");
const server = createServer((req, res) => {
  //   readStream.on("data", data => {
  //     res.statusCode = 200;
  //     res.setHeader("Content-Type", "text/html");
  //     res.end(data);
  //   });

  readStream.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
