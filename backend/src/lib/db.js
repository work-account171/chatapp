import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    // const conn = await mongoose.connect("mongodb+srv://vorkacountp171:aliyasircluster@aliyasircluster.jz18fyp.mongodb.net/?retryWrites=true&w=majority&appName=AliYasircluster");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
