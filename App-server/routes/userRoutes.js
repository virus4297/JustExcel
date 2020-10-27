const express = require('express');
const router = express.Router();
const User = require('../config/model');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {isLoggedIn} = require('../config/auth');
const LocalStrategy = require('passport-local').Strategy;


router.post('/signup',function(req,res){
    User.findOne({ email:req.body.email },async (err,user)=>{
        if(err) console.log(err);
        if(user){ res.send(false)};
        if(!user){
            const hashpassword = await bcrypt.hash(req.body.password,10);
            const newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = hashpassword;
            newUser.save().then(res.send(true)).catch(err=> console.log(err));
        }
    })
});


router.post('/login',(req,res,next)=>{

        passport.authenticate('local',async function(err, user, info) {
          if (err)
          {
            var message = err;
            res.end(message);
          }
          else if(!user) { 
            var message = info;
            res.end(message); 
          }
          else{
          req.logIn(user, function(user) {
            return res.send(user);
          });
        }
        })(req, res, next);
})

passport.use(new LocalStrategy({
  usernameField:'email',
  passwordField:'password',
  passReqToCallback:true
},(req,email,password,done)=>{
  User.findOne({'email':email},async (err,user)=>{
    
    if(err){return done(err);}

    if(!user)
    {
      return done(null,false,'User not Found');
    }

    if(await !user.validPassword(password))
    {
      return done(null,false,'Invalid Password');
    }
    return done(null,user);
  });
}
));

router.get('/user',(req,res)=>{
  res.send(req.user);
})

router.get('/logout',(req,res)=>{
  req.logOut();
  res.send('logout');
})

passport.serializeUser(function(user,done){
  done(null,user.id);
});

passport.deserializeUser(function(id,done){
  User.findById(id,function(err,user){
      done(err,user);
  });
});

module.exports = router;