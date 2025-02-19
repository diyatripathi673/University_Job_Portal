// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
// });

// const User = mongoose.model('User', UserSchema);

// module.exports = User;

// models/User.js
import mongoose from "mongoose";

// Create a Schema
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "recquriter"],
  },
  profile: {
    bio: { type: String },
    skills: [{ type: String }],
    resume: { type: String }, //url to resume file
    resumeOriginalName: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
    profilePhoto: {
      type: String,
      default:""
    },
  },
},{timestamps:true});

// Create a Model
const User = mongoose.model("User", userSchema);

// Export the model
export default User;
