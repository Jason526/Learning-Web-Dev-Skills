const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//__dirname doesnt care where the current working directory is - allows you to access it anywhere

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
  //whatever "num is", it'll be avaible under rand in the template
  //could render rand
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
