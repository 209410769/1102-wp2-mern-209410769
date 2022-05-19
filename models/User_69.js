import mongoose from 'mongoose'

const UserSchema_69 = new mongoose.Schema({
    name: {
        type: String,
        requires: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        requires: [true, 'Please provide email'],
        unique: true
    },
    password: {
        type: String,
        requires: [true, 'Please provide password'],
        minlength: 6,
        select: false
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 30,
        default: 'lastName'
    },
    location: {
        type: String,
        requires: [true, 'Please provide password'],
        maxlength: 30,
        default: 'my city'
    }
});

export default mongoose.model('User_69', UserSchema_69);