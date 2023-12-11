const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const orderRecordSchema = new Schema({
    orderId: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    }
});

const userSchema = new Schema({
    username: { type: String,required: true,unique: true,},
    email: {type: String,required: true,unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address',
        },
    },
    password: { type: String,required: true},

    orderRecords: [orderRecordSchema],
    
},{timestamps:true});


//static signup method
userSchema.statics.signup = async function (username, email, password){

    if(! username || !email || !password){
       throw Error('All fields must be filled');
    }
   const exists = await this.findOne({email});
   if(exists){
    throw Error('Email already in use');
   }
   if(!validator.isEmail(email)){
     throw Error('Email is not valid')
   }
   if(!validator.isStrongPassword(password)){
     throw Error('Password not strong enough')
   }
   
   const salt = await bcrypt.genSalt(10);
   const hash = await bcrypt.hash(password, salt);

   const user = await this.create({username, email, password:hash})
   return user;
}

//static login method
userSchema.statics.login = async function( identifier, password){
   
    if(!identifier || !password){
        throw Error('All fields must be filled');
    }
    const isEmail = validator.isEmail(identifier);

    const user = isEmail 
    ? await this.findOne({email: identifier})
    : await this.findOne({username: identifier});

    if(!user){
     throw Error('Incorrect username/email');
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw Error('Incorrect password')
    }

    return user;
    


}
const User = mongoose.model('User', userSchema);

module.exports = User;