import mongoose from "mongoose";
export async function connectDatabase() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/star_technovation",
      { serverSelectionTimeoutMS: 2500 },
    );
    console.log("Connected to local MongoDB.");
  } catch {
    console.log("MongoDB unavailable; using the local JSON database.");
  }
}
export const isMongoConnected = () => mongoose.connection.readyState === 1;
