
// import userRoute from "./routes/user.route.js"

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js'
import jobRoute from './routes/job.route.js'
import applicationRoute from "./routes/application.route.js"

dotenv.config();



const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Fix the URL
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = 4000;

// Use routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/company', companyRoute);
app.use('/api/v1/job', jobRoute);
app.use('/api/v1/application', applicationRoute);


// Connect to DB and start server
app.listen(PORT, () => {
  connectDB(); // Ensure the DB is connected before starting the server
  console.log(`Server running at port ${PORT}`);
});

// app.post('/api/users', async (req, res) => {
//   try {
//     const { name, email, age } = req.body;`

//     // Create a new user
//     const newUser = new User({
//       name,
//       email,
//       age,
//     });

//     // Save user to MongoDB
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully', user: newUser });
//   } catch (err) {
//     console.error('Error creating user:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });


// // const express = require("express");
// import express from 'express';
// import connectDB from './config/db.js';
// // const connectDB = require("./config/db")
// // const cors = require('cors');
// import cors from 'cors'
// // const { User } = require("./models/User");
// import User from './models/User.js';  // Correct import with .js extension


// // const patientRoutes = require('./routes/patientRoutes');
// // const paymentRoutes = require('./routes/payment');
//  const app = express();
// //  const User = require("./models/user")

// const express = require("express");
// const connectDB = require("./config/db")
// const cors = require('cors');
 
//  const app = express();
//  const User = require("./models/user")

 
// app.use(cors());
// app.use(express.json());


// // app.use('/api', patientRoutes);
// // app.use('/pay', paymentRoutes);

// app.post('/api/users', async (req, res) => {
//   try {
//     const { name, email, age } = req.body;

//     // Create a new user
//     const newUser = new User({
//       name,
//       email,
//       age,
//     });

//     // Save user to MongoDB
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully', user: newUser });
//   } catch (err) {
//     console.error('Error creating user:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });


 
// connectDB()
// .then(() => {
//   console.log("Database connection established...");
//   app.listen(3000, () => {
//     console.log("Server is successfully listening on port 777...");
//   });
// })
// .catch((err) => {
//   console.error("Database cannot be connected", err);
// });



