

import mongoose from "mongoose";
const {Schema} = mongoose;
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,   
    },
    email:{
        type:String,
        required:true,   
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    userType:{
        type:String,
        default:"Basic"
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true}
)

export default  mongoose.model("User",UserSchema)