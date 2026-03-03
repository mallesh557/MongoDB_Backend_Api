const mongoose=require('mongoose'); 
const express=require('express');
const cors=require('cors');

const dotenv=require('dotenv');
dotenv.config();
const User=require('./user');
const app=express();
app.use(cors());


mongoose.connect(process.env.connectionString)
.then(()=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.log(err);
})
const port=process.env.PORT || 3000;
app.use(express.json());
app.listen(port,()=>{
    console.log("server is running");
})

app.post("/users",async(req,res)=>{
    const newuser=new User(req.body);
    
        const saveduser=await newuser.save();
        res.json(saveduser);
    
})

app.get("/users",async(req,res)=>{
    const users=await User.find();
    res.json(users);
})