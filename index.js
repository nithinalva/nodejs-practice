const express = require("express");
const app = express();
var format = require("date-format");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello listening in port");
});

//user details
app.get("/api/v1/instagram", (req, res) => {
  const user = {
    name: "Nithin",
    age: 12,
    followers: 122,
    likes: 2200,
    posts: 12,
    date: format("dd MMM YYYY", new Date()),
  };

  res.status(200).json(user);
});

app.get("/user", (req, res) => {
  res.status(500).json({ name: "Hello nithin how are you" });
});

app.get("/api/v1/:name", (req, res) => {
  console.log(req.params.name);
  res.status(200).json({ params: req.params.name });
});

app.listen(PORT, () => {
  console.log("Listening in port ", PORT);
});
