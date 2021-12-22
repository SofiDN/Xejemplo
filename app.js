const express = require('express')

const path = require('path')

const app= express()

app.listen(process.env.PORT || 3001,function(){
    console.log("servidor corriendo en puerto 3001")
});

app.use(express.static(path.resolve(__dirname + "/public")));


app.get("/",(req,res)=>{ 
res.sendFile(path.resolve(__dirname+"/views/home.html"))});

app.get("/register",(req,res)=> {
res.sendFile(path.resolve(__dirname+"/views/register.html"))},

app.get("/login",(req,res)=> {
res.sendFile(path.resolve(__dirname +"/views/login.html"))}))