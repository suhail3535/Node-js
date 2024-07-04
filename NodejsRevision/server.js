const http = require("http");
const fs = require("fs");
const { clear } = require("console");
const myserver = http.createServer((req, res) => {
  const ipAddress = req.socket.remoteAddress;
  const datetimeobj = new Date();
  let logs = `${datetimeobj.toDateString()},${datetimeobj.toTimeString()}: New Request received from IP ${ipAddress} and ${
    req.url
  }\n`;
  fs.appendFile("logs.txt", logs, (err, data) => {
    // res.end("this is from server");
    // <------------for know fron which route requet came----
    switch (req.url) {
      case "/":
        res.end("Welcomt to HomePage");
        break;
      case "/about":
        res.end("My Name Is Suhail Khan");
        break;
      case "/project":
        res.end("this is ecom project");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

myserver.listen(8000, () => {
  console.log("server running on port 8000");
});
