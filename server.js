// const request = import
const http = require("http");

const host = "localhost";

const port = 7001;

function notFound(res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("Not Found\n");
}

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      switch (req.url) {
        case "/home":
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("Home page\n");

          break;
        case "/about":
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("About page\n");
          break;
        default:
          notFound(res);
          break;
      }
      break;

    case "POST":
      switch (req.url) {
        case "/api/admin":
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("Create admin req\n");

          break;
        case "/api/user":
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("Create user req\n");
          break;
        default:
          notFound(res);
          break;
      }
      break;

    default:
      notFound(res);
      break;
  }
});
server.listen(port, host, () => {
  console.log(`server listening at port http://${host}:${port}`);
});
