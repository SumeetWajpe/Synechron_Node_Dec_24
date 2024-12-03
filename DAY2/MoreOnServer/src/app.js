const { createServer } = require("node:http"); // builtin
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("src/Index.html", (err, data) => {
      if (!err) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      } else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.end(`<h1 style="color:red"> Something went wrong ! </h1>`);
      }
    });
  } else if (req.url == "/styles.css") {
    fs.readFile("src/styles.css", (err, data) => {
      if (!err) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        res.end(data);
      } else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.end(`<h1 style="color:red"> Something went wrong ! </h1>`);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1 style="color:red"> Resource not found ! </h1>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
