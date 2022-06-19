import User_69 from "../models/User_69.js";
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'

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
    console.log('body', req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequestError('Please provide all values');
    }
    const user = await User_69.findOne({ email }).select('+password');
    if (!user) {
        throw new UnAuthenticatedError('Invalid Credentials');
    }
    console.log('login user', user);

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnAuthenticatedError('Invalid Credentials');
    }

    const token = user.createJWT();
    user.password = undefined;
    res.status(StatusCodes.OK).json({
        user,
        token,
        location: user.location,
    });
    // res.json({msg:'Login user -- YanboLin 209410769'});
}
// update
const updateUser_69 = async (req, res) => {
    const { email, name, lastName, location, password } = req.body;
    if (!email || !name || !lastName || !location || !password) {
        throw new BadRequestError('Please provide all values');
    }
    console.log('body', req.body);
    console.log('_id', req.user.userId);
    const user = await User_69.findOne({ _id: req.user.userId });
    user.email = email;
    user.name = name;
    user.lastName = lastName;
    user.location = location;
    user.password = password;
    console.log('user', user);
    await user.save();
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user, token, location: user.location });
    // res.send('Update user -- Hsingtai, 123456789');
};
export { register_69, login_69, updateUser_69 }