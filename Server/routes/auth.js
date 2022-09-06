const express = require('express');
const router = express.Router();
const mongoose = require('../db');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Authenticate = require('../middleware/authenticate');

//login route
router.post('/login',async (req,res)=>{
    const{email,password} = req.body;

    if(!email || !password){
      return res.status(400).send({error:'Please fill all the fields'});
    }
     
    try{
       const userFound = await User.findOne({email : email});
       

       if(userFound){
            const isMatch = await bcrypt.compare(password,userFound.password);
            const authtoken = await userFound.generateAuthToken();
            
            if(isMatch){
                  res.cookie("jwttoken" , authtoken,{
                        expires : new Date(Date.now() + 259200000),
                        httpOnly : true
                      }
                      )
                  return res.status(200).send({success : "Successfully logged in"});
            }
            else{
                  return res.status(422).send({error : "Invalid details"});
            }
       }
       else{
            return res.status(422).send({error : "Invalid details"});
       }

    }
    catch(err){
          console.log(err);
    }
})

//register route
router.post('/register',async (req,res)=>{
      const{name,email,password,cpassword} = req.body;
     
      
      if(!name || !email || !password || !cpassword){
           return res.status(422).send({error : 'Invalid input details'});
      }
      else if(password != cpassword){
            return res.status(422).send({error : 'Password not matching'});
      }
      
      try{
            const userExist = await User.findOne({email:email});
            if(userExist){
                return  res.status(422).send({error : 'User already exist'});
            }

            const user = new User({name,email,password,cpassword});
             await user.save();
            return res.status(201).send({success:'user created successfully'});
      }
      catch(err){
        console.log(err);
      }
 
});

//about route
router.get('/about',Authenticate,async(req,res) =>{
         res.status(200).send(req.rootUser);
})

//to get the data 
router.get('/getData', Authenticate, async (req,res)=>{
        res.status(200).send(req.rootUser);
})

//contact route
router.post('/contact',Authenticate,async (req,res) =>{

      try{
            const {name,email,message} = req.body;
             console.log("Name" + name)
            if(!name || !email || !message){
                  res.status(401).json({error : "please fill all the fields"});
            }

            const user = await User.findOne({_id : req.rootUser._id});
            console.log(user);
            if(user){
                  const userMessage = await user.addMessage(name,email,message);
                  await user.save();

                  res.status(201).json({message : "message saved successfully"});
            }
      }
      catch(e){
              res.send(e);
      }
})

//logout route
router.post('/logout',(req,res) =>{
       res.clearCookie('jwttoken' , {path : '/'});
       res.status(201).send('logout successfull');
})
module.exports = router;
