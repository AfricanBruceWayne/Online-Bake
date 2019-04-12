var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/order", (req, res) => {
    res.render("order");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});






const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));