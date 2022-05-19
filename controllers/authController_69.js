import User_69 from "../models/User_69.js";

// register
const register_69 = async (req, res) => {
    console.log('body', req.body);
    const user = await User_69.create(req.body);
    res.status(201).json({ user });
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