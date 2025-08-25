import mongoose from "mongoose";

export const connectDB = async (mongoURI) => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Failed to connect to MongoDB", err);
  }
};
