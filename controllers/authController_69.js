import User_69 from "../models/User_69.js";
import { StatusCodes } from 'http-status-codes'

// register
const register_69 = async (req, res, next) => {
    console.log('body', req.body);
    const user = await User_69.create(req.body);
    const token = user.createJWT();
    //console.log('token', token);
    res.status(StatusCodes.CREATED).json({ user, token, location: user.location });

    // add express-async-errors, remove try catch block
    // try {
    //     console.log('body', req.body);
    //     const user = await User_69.create(req.body);
    //     const token = user.createJWT();
    //     //console.log('token', token);
    //     res.status(201).json({ user, token });
    // } catch (err) {
    //     //res.status(500).json({ msg: "Error on registering user" });
    //     next(err);
    // }
    //    res.send('register user -- YanBoLin 209410769');
}
// login
const login_69 = async (req, res) => {
    res.send('login user -- YanBoLin 209410769');
}
// update
const updateUser_69 = async (req, res) => {
    res.send('update user -- YanBoLin 209410769');
}

export { register_69, login_69, updateUser_69 }