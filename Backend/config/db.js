// const mongoose = require('mongoose// const connectDB = async () => {//     await mongoose.connect("mongodb+srv:tripathidiya673:Ywi1nmlzEW2QrHg8@cluster0.gumlx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");//// module.exports = connectDB;


// const mongoose = require('mongoose');

// const connectDB = async () => {
//     await mongoose.connect(
//         'mongodb+srv://tripathidiya673:Ywi1nmlzEW2QrHg8@cluster0.gumlx.mongodb.net/yourDatabaseName?retryWrites=true&w=majority', 
//         // { useNewUrlParser: true, useUnifiedTopology: true }

//     );
// };

//  module.exports = connectDB;

 // db.js


// # MONGO_URI="mongodb+srv:tripathidiya673:Ywi1nmlzEW2QrHg8@cluster0.gumlx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// # PORT= 8000;


// db.js

import mongoose from 'mongoose';

 const connectDB = async () => {
  // const uri ="mongodb+srv://mahibisht2610:iM97SzVLpy4onuTC@mahima26.5y6po.mongodb.net/?retryWrites=true&w=majority&appName=Mahima26";
// const uri = "mongodb+srv://tripathidiya673:tripathidiya673@cluster0.gumlx.mongodb.net/jobPortal?retryWrites=true&w=majority";
// const uri = "mongodb+srv://tripathidiya673:Ywi1nmlzEW2QrHg8@cluster0.gumlx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const uri= "mongodb+srv://tripathidiya673:Ywi1nmlzEW2QrHg8@cluster0.gumlx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



  try {
    await mongoose.connect(uri);
    console.log('Connected to the database');
  } catch (err) {
    console.error('Database connection failed', err);
    process.exit(1); // Exit the process if the connection fails
  }
};


export default connectDB;