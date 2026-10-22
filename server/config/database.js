
import mongoose from "mongoose";

export async function connectDatabase() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is missing.");
  }

  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
  });

  console.log("Connected to MongoDB.");
}

export const isMongoConnected = () =>
  mongoose.connection.readyState === 1;
