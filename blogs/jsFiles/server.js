const http = require("http");

const fs = require("fs");

const _  = require('lodash')

// const hostname = '127.0.0.1';
const port = 3000;

let filePath = "./htmlFiles/";
let finalFilePath = "";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  // console.log(__dirname)
  // console.log(process.cwd())

  // console.log(`The random number is : ${_.random(10,20)}`);


  if (req.url === "/") {
    finalFilePath = filePath + "index.html";
  } else {
    finalFilePath = filePath + "about.html";
  }
  fs.readFile(finalFilePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      console.log(`The url client visisted is : ${req.url}`);
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, "localhost", () => {
  console.log(`Server running at http://localhost:${port}/`);
});