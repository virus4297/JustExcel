const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const Port = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes');
const session = require('express-session');
const cookieparser = require('cookie-parser');
const passport  = require('passport');
const cors = require('cors');
const mongoUrl = require('./config/keys').mongoURL;
const MongoStore = require('connect-mongo')(session);
const app = express();

mongoose.connect(mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>{ console.log("Database Connected") })
        .catch((err)=>{ console.log(err) })

app.use(bodyparser.json());
app.use(cors({
    origin:"http:localhost:3000",
    credentials:true
}));

app.use(session({
    secret:"SecretCode",
    resave:true,
    saveUninitialized:true
}));

var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(require('express-session')
({
  secret: 'SeecretCode',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
  store: new MongoStore({ mongooseConnection:mongoose.connection }),
  cookie: { 
    secure: false,
    httpOnly: true,
    expires: expiryDate
   }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieparser("SecretCode"));

app.use("/user",userRoutes);
app.listen(Port,()=>{
    console.log(`Server started at port ${Port}`);
})