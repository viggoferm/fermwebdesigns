var express = require("express"),
app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home")
});

app.get("/tjanster", function(req, res){
    res.render("tjanster")
});

app.get("/exempel", function(req, res){
    res.render("exempel")
});

app.get("*", function(req, res){
    res.render("sidafinnsej")
});

app.listen(5000, function(){
    console.log("servern startad");
});
