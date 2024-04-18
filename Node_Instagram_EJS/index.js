const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname,"/public"))); // link css file 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log(`listening on port${port}`);
});

app.get("/",(req,res)=>{
    console.log("server start");
    // res.render("home.ejs");
});

// instagram page 
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("../Node_Instagram_EJS/data.json");
    res.render("instagram.ejs", {data:instaData[username]});
});