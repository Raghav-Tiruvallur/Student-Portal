const express=require('express');

const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true
    },
    Event_Name:{
        type:String,
        required:true
    },
    Club:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('Users_Registered_Events',userSchema);