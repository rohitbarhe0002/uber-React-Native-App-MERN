import User from "../../Schema/user/user.js"
import bcrypt from "bcryptjs";
// import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv' 
dotenv.config()

/// register user
export const signUp = async (req, res, next) => {
  const { username,email,address,password,userType,city,phoneNumber } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({
      username: username,
      email: email,
      password: hash,
      address: address,
      city:city,
      userType: userType,
      phoneNumber:phoneNumber
    });
    await newUser.save();
    res.status(200).send(  "user has been created");
  } catch (err) {
    next(err);
  }
};

/// login user
export const  signIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // RestaurentMenu.find({}, { _id: 0 }).lean()
    // if (!user) return next(createError(404, "user not found !"));
    const isPasswordChecked = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordChecked)
   {
     res.status(404).json({errorMessage:"password is not matched"});
   }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },process.env.JWT,
      {expiresIn: '5s'}
    );
    const { password, isAdmin, ...otherdetails } = user._doc;
    res.cookie("access_token",token,{
      httpOnly:true,
    }).status(200).json({...otherdetails,token});
  } catch (err) {
      res.status(500).json(err);
  }
};