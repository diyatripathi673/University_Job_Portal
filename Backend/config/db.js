import mongoose from "mongoose";

const connectDB = async () => {
  const uri =
    "mongodb+srv://tripathidiya673:Ywi1nmlzEW2QrHg8@cluster0.gumlx.mongodb.net/jobPortal?retryWrites=true&w=majority&appName=Cluster0";

  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Database connection failed", err);
    process.exit(1);
  }
};

export default connectDB;
