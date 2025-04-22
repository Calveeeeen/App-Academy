const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require("http");
const fs = require("fs");
const { URL } = require("url");
const { clear } = require("console");
const { send } = require("process");
const port = 5000;

let latestBody = null;
let reqBody = null;
server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile("index.html", "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error reading file");
        return;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  }

  res.end("hello world!");
});

server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/") {
    let bodyData = "";

    req.on("data", chunk => {
      bodyData += chunk.toString();
    });

    req.on("end", () => {
      req.body = parseBody(bodyData);
      reqBody = req.body;

      sendFormPage(req, res);
    });
  } 
  else if(req.method==="GET" && req.url === "/"){
    sendFormPage(req, res);
  }
  else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port", port);
  console.log("visit http://localhost:5000");
});

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
