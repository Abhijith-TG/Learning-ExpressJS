import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Home</h1>");
})

app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>")
})


app.listen(3000,()=>
    console.log("Started server !")
)