const request = require("request");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ encoded: true }));
app.set("view engine", "ejs");

const campgrounds = [
  {
    name: "Salmon Creek",
    image: "https://source.unsplash.com/8f_VQ3EFbTg"
  },
  {
    name: "Dusty Pointe",
    image: "https://source.unsplash.com/eDgUyGu93Yw"
  },
  {
    name: "Granite Hill",
    image: "https://source.unsplash.com/ebnlHkqfUHY"
  }
];

app.get("/", (req, res) => {
  res.render("landing");
});
app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds: campgrounds });
});
app.get("/campgrounds/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/campgrounds", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});
app.get("*", (req, res) => {
  res.send("ERROR 404");
});

app.listen("3000", () => {
  console.log("🔥YelpCamp online @ port 3000 ༼ つ ◕_◕ ༽つ");
});
