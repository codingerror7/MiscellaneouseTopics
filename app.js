const express = require("express");
const app = express();
const port = 5000;

app.get("/register",(req,res)=>{
    res.send("THIS IS GET ROUTE, YOU ARE REGISTERED SUCCESSFULLY!");
})
app.post("/register",(req,res)=>{
    res.send("THIS IS POST ROUTE, YOUR DATA IS SECURED!!!");
})
app.listen(port,()=>{
    console.log(`SERVER CREATED AT ${port}`);
})
