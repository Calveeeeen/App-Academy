const http = require("http");
const fs = require("fs");
const path = require("path")

let indexRes = fs.readFileSync("index.html", "utf-8");
let mimeTypes = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  js: "text/javascript",
  html: "text/html",
  png: "image/png",
  pdf: "application/pdf",
  svg: "image/svg+xml",
  txt: "text/plain",
  css: "text/css",
};

const server = http.createServer((req, res) => {
  // Your code here
  // Phase 1 - Single Asset

  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");
  // res.end(indexRes);

  // Phase 2 - Multiple Assets
  if (req.method === "GET" && req.url.startsWith("/static")){
    const assetPath = req.url.replace("/static", "./assets");
    const ext = path.extname(assetPath).slice(1);

    const contentType = mimeTypes[ext] || "application/octet-stream";

    fs.readFile(assetPath, (err, data) => {
      if(err){
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("File not found");
      }
      else{
        res.statusCode - 200;
        res.setHeader("Content-Type", contentType);
        res.end(data);
      }
    });
  }
  else{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(indexRes)
  }


});

const port = 3000;

server.listen(port, () => console.log("Server is listening on port", port));
