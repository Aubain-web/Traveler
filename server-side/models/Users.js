const mongoose = require('mongoose');



//schema
const UserSchema = new mongoose.Schema({
    fisrtName : {type:String, require:true},
    lastName : {type:String, require:true},
    email : ({ type : String, require : true, unique : true }),
    password:({type:String, require:true})
})

const User = mongoose.model('User', UserSchema);
module.exports = User;