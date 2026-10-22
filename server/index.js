
import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/database.js";
import apiRoutes from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: [
      "https://star-technovation.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Star Technovation API",
  });
});

let databaseConnection;

app.use("/api", async (req, res, next) => {
  try {
    if (!databaseConnection) {
      databaseConnection = connectDatabase().catch((error) => {
        databaseConnection = undefined;
        throw error;
      });
    }

    await databaseConnection;
    next();
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    res.status(503).json({ message: "Database unavailable" });
  }
});

app.use("/api", apiRoutes);

export default app;
