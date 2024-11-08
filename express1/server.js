import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome!");
    console.log(req);
    
})

app.listen(8000,()=>{
    console.log("Started");
    
})