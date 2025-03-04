import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';  // Correct import for dotenv
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

dotenv.config();  // Load environment variables from .env

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
 
    console.log( fullname, email, phoneNumber, password, role);
 
    console.log( req.body);
 
    
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is Missing",
        success: false,
      });
    }
    console.log(fullname);
    
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists with this email.",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is Missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    //check user role
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with the current role",
        success: false,
      });
    }

    const tokenData = { userId: user._id };
    
    const token = await jwt.sign(tokenData, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30", {
      expiresIn: '1d',
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log("RR",error);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

export const logout = async (req, res) => {
  try {
    return res
    .status(200)
    .cookie("token", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
      httpOnly: true,
      sameSite: "strict",
    })
    .json({
      message: `Welcome back ${user.fullname}`,
      user,
      success: true,
    });
  
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, bio, skills } = req.body;
    const file = req.file; // Assuming you're uploading a file (e.g., profile picture)
     const fileUri = getDataUri(file);  
     const cloudResponse= await cloudinary.uploader.upload(fileUri.content)
          
    let skillsArray = " ,";
    if (skills) {
      skillsArray = skills.split(","); // Corrected split logic
    }

    const userId = req.id; // Ensure that req.id is set properly, e.g., from a middleware
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    //Ensure profile exists
    if (!user.profile) {
      user.profile = {}; // Initialize profile if it doesn't exist
    }

    //Update fields as necessary
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;  // Update bio
    if (skills) user.profile.skills = skillsArray;  // Update skills

    await user.save();
        if(cloudResponse){
          user.profile.resume=cloudResponse.secure_url //save the cloudinary uri
          user.profile.resumeOriginalName=file.originalName //
        }
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Profile updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};






// import User from "../models/User.model.js";
//  import bcrypt from "bcryptjs";
//  import jwt from "jsonwebtoken";
//  require('dotenv').config(); // Make sure to load environment variables


// export const register = async (req, res) => {
//    try {
//      const { fullname, email, phoneNumber, password, role } = req.body;
//     if (!fullname || !email || !phoneNumber || !password || !role) {
//        return res.status(400).json({
//          message: "Something is Missing",
//          success: false,
//      });
//     }
//      const user = await User.findOne({ email });
//      if (user) {
//        return res.status(400).json({
//          message: "User already exists with this email.",
//          success: false,
//        });
//      }
//      const hashedPassword = await bcrypt.hash(password, 10);
//      await User.create({
//        fullname,
//        email,
//        phoneNumber,
//        password: hashedPassword,
//        role,
//      });
//      return res.status(201).json({
//        message: "Account created successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Something went wrong",
//       success: false,
//     });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password, role } = req.body;
//     if (!email || !password || !role) {
//       return res.status(400).json({
//         message: "Something is Missing",
//         success: false,
//       });
//     }
//     let user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({
//         message: "Incorrect email or password",
//         success: false,
//       });
//     }
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return res.status(400).json({
//         message: "Incorrect email or password",
//         success: false,
//       });
//     }
//     // check user role
//     if (role !== user.role) {
//       return res.status(400).json({
//         message: "Account doesn't exist with the current role",
//         success: false,
//       });
//     }

//     const tokenData = { userId: user._id };
//     const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
//       expiresIn: '1d',
//     });
    

//     user = {
//       _id: user._id,
//       fullname: user.fullname,
//       email: user.email,
//       phoneNumber: user.phoneNumber,
//       role: user.role,
//       profile: user.profile,
//     };

//     return res
//       .status(200)
//       .cookie("token", token, {
//         maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
//         httpOnly: true,
//         sameSite: "strict",
//       })
//       .json({
//         message: `Welcome back ${user.fullname}`,
//         user,
//         success: true,
//       });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Something went wrong",
//       success: false,
//     });
//   }
// };

// export const logout = async (req, res) => {
//   try {
//     return res.status(200).cookie("token", "", { maxAge: 0 }).json({
//       message: "Logged out successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Something went wrong",
//       success: false,
//     });
//   }
// };

// export const updateProfile = async (req, res) => {
//   try {
//     const { fullname, email, phoneNumber, password, bio, skills } = req.body;
//     const file = req.file; // Assuming you're uploading a file (e.g., profile picture)
//     // if (!fullname || !email || !phoneNumber || !password || !bio || !skills) {
//     //   return res.status(400).json({
//     //     message: "Something is Missing",
//     //     success: false,
//     //   });
//     // }

//     let skillsArray = " ,";
//     if (skills) {
//       skillsArray = skills.split(","); // Corrected split logic
//     }

//     const userId = req.id; // Ensure that req.id is set properly, e.g., from a middleware
//     let user = await User.findById(userId);
//     if (!user) {
//       return res.status(400).json({
//         message: "User not found",
//         success: false,
//       });
//     }
//     if (fullname) user.fullname = fullname;
//     if (email) user.email = email;

//     if (phoneNumber) user.phoneNumber = phoneNumber;
//     if(profile)user.profile.bio = bio;
//     if (skills) user.profile.skills = skillsArray;

//     await user.save();
//     user = {
//       _id: user._id,
//       fullname: user.fullname,
//       email: user.email,
//       phoneNumber: user.phoneNumber,
//       role: user.role,
//       profile: user.profile,
//     };

//     return res.status(200).json({
//       message: "Profile updated successfully",
//       user,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Something went wrong",
//       success: false,
//     });
//   }
// };



