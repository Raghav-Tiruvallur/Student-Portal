const express=require('express');
const User=require('../models/user');
const Event_registered=require('../models/EventReg');
const router=express.Router();

router.post('/register',(req,res)=>{
    let reg=new User(req.body)
    reg.save()
    .then((err)=>{
        if(err)
          res.send(err);
        else 
            res.send("Succesful Register");
    });
}
)

router.post('/',(req,res)=>{
    User.findOne({email:req.body.email})
    .then(found=>{
        console.log("User Exists");
        current_user=found.email;
        if(found.password===req.body.password){
            res.send("1");
        }
        else
          res.send("0");
    })
    .catch((err)=>console.log(err));
})
router.post('/event/EventRegister',(req,res)=>{
    let new_register=new Event_registered(req.body)
    new_register.save()
    .then((err)=>{
        if(err)
          res.send(err);
        else 
            res.send("Succesful Register");
    });
}
)

router.get('/event',(req,res)=>{
    Event_registered.find((err,data)=>{
        if(err)
            res.json(err);
        else 
            res.json(data);
    })
})



module.exports=router;
