const express =require(express)

const app=express()

app.get("/",(req,res)=>{
res.send("hello worl");
})

app.listen(2000,()=>{
    console.log("serer is running")
})