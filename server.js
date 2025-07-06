const bodyParser = require("body-parser");
const express = require("express");

var app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

var items = [];
var example = "Working...";
app.post("/",function(req,res){
    var item = req.body.ele1;
    items.push(item);
    res.redirect("/");
    
})

app.get("/",function(req,res){
    res.render("list",{ejes:items})
})

app.post("/",function(req,res){
    var item = req.body.ele1;
    items.push(item);
    res.redirect("/");
    
})



app.listen("8000",function(){
    console.log("Server Started");
});