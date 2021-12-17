const express = require("express");
const app = express();
const port = 5000;
app.get("/users/user/ikram", (req, res)=>{
    res.send("this is users area and it will be nested , Well done Ikram , You ara doing Well ")
});
app.get("/", (req,res)=>{
    res.send('this is my another projects');
});

app.listen(port, (req, res)=>{
    console.log("Listing from " ,port)
});
