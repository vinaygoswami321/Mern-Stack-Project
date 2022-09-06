const jwt = require('jsonwebtoken');
const User = require('../models/userSchema')
const Authenticate = async (req,res,next) =>{
          try{
             const token = req.cookies.jwttoken;
             const verifytoken = jwt.verify(token,process.env.SECRET_KEY);
             const rootUser = await User.findOne({_id : verifytoken._id , "tokens.token" : token});

             if(!rootUser){throw new Error('User not found')};

             req.token = token;
             req.rootUser = rootUser;
             req.UserID = rootUser._id;
          }
          catch(e){
           res.status(401).send({error : " Unauthorized : No token provided"});
          }

         next();
}

module.exports = Authenticate;