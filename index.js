const express=require("express")
require('dotenv').config()
const app=express()
const port=3000

app.get('/',(req,res)=>{
  res.send("Hello word")
})
app.get('/twitter',(req,res)=>{
  res.send("Twitter is available")
})
app.get('/login',(req,res)=>{
  res.send("User login page")
})
app.get('/chai',(req,res)=>{
  res.send("yes lets drinks")
})
app.listen(process.env.PORT,()=>{
  console.log(`Example app listening on a port ${port}`);
  
})