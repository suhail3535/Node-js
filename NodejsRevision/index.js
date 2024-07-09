const express = require("express");
const app = express();
const fs = require("fs");
const user = require("./db.json");
// console.log(user);
app.get("/", (re, res) => {
  return res.send("welcome to home");
});

app.get("/api/users", (req, res) => {
  return res.json(user);
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const userid = user.find((ele) => ele.id === id);
  return res.json(userid);
  // console.log(id)
});
app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  const userid = user.find((ele) => ele.id === id);
  const body = req.body;
  user.push({ body });
  fs.writeFile("./db.json", JSON.stringify(userid), (err, data) => {
    return res.json({ status: "success", userid });
  });
  // console.log(id)
});
app.listen(8080, () => {
  console.log("server running on port 8080");
});
