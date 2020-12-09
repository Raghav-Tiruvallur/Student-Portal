const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');
const router1=require('./routes/route_1');
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use('/',router1);
const dburl='mongodb://localhost:27017/Project';

mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err) throw err;
    else 
      console.log("Database Connected");
});
app.listen(5000,()=>console.log("Running server on port 5000"));

