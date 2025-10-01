import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let connectionPromise = null;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (connectionPromise) {
    return connectionPromise;
  }

  connectionPromise = mongoose
    .connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
    })
    .then((conn) => {
      console.log(`MongoDB connected: ${conn.connection.host}`);
      return conn.connection;
    })
    .catch((error) => {
      console.error(`MongoDB error: ${error.message}`);
      connectionPromise = null;
      throw error;
    });

  return connectionPromise;
};

export default connectDB;
