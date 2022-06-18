import mongoose from 'mongoose';
import validator from 'validator'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
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
        validate: {
            validator: validator.isEmail,
            message: 'please provide valid email',
        },
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
    },
});

UserSchema_69.pre('save', async function () {
    console.log('password', this.password);
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema_69.methods.createJWT = function () {
    // console.log('this', this);
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
}

UserSchema_69.methods.comparePassword = async function (condidatePassword) {
    const isMatch = await bcrypt.compare(condidatePassword, this.password);
    return isMatch;
}
export default mongoose.model('User_69', UserSchema_69);