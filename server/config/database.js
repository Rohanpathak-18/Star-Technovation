import mongoose from "mongoose";
export async function connectDatabase() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI,
      { serverSelectionTimeoutMS: 2500 },
    );
    console.log("Connected to MongoDB.");
  } catch {
    console.log("MongoDB unavailable; using the local JSON database.");
  }
}
export const isMongoConnected = () => mongoose.connection.readyState === 1;
