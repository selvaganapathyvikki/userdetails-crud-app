const connection = require("./model");
const express = require("express");
const expresshb = require("express-handlebars");
const path = require("path");
const { urlencoded } = require("body-parser");
const detailsController = require("./controller/router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "/views/"));

app.engine(
  "hbs",
  expresshb({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  //res.send("<h1>Helloo world</h1>");
  res.render("index");
});

app.use("/details", detailsController);

app.listen(3000, (req, res) => {
  console.log("Server started on port 3000");
});
