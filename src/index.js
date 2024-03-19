require('dotenv').config({path:'src/.env'})
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
const movieRoutes  = require("./routes/movieRoutes");



const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT||5000;


app.use(cors());
app.use(express.json());
app.use("/api/users",authRoutes)
app.use("/api/movies",movieRoutes);

mongoose.connect(MONGODB_URI).then(()=>console.log("Connected to MongoDB")).catch((err)=>console.log(err));

app.get('/',(req,res)=>{
    console.log("Backend Server is running")
})

app.listen(5000,()=>{
   console.log("Server running on Port 5000")
})

