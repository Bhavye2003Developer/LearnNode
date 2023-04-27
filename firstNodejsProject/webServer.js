//creating a local server

const http = require("http");

const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  //when someone reaches to my server, this callback will run.
  console.log(`Request made to : ${req.url}`);

  //set header content type
  // res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");

  let path = "views/";

  if (req.url === "/about") {
    path += "about.html";
  } else {
    path += "index.html";
  }

  // fs.readFile(path, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     // res.statusCode = 404;
  //   } else {
  //     res.write(data);
  //     console.log(data);
  //     // res.statusCode = 200;
  //   }
  // });
  // res.end();
  fs.readFile(path,(error, data)=>{
    res.write(data)
  })
  // res.write("<h1>Hello Bhavye jain</h1>");
  res.end();
});

server.listen(port, "localhost", () => {
  console.log(`listening to port ${port}...`);
});
