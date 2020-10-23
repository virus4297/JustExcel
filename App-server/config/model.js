const { ErrorMessage } = require('formik');
const mongoose = require('mongoose');
const bcrypt  = require('bcryptjs')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

UserSchema.methods.validPassword = function(password){
    return  bcrypt.compareSync(password,this.password);
}

module.exports = User = mongoose.model('user',UserSchema);