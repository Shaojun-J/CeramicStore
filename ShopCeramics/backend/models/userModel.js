const mongoose = require('mongoose');

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


const User = mongoose.model('User', userSchema);

module.exports = User;