import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String},
    about:{type:String},
    joinedOn:{type:Date,default:Date.now},
    tags:{type:[String]}
})


export default mongoose.model("User",userSchema);