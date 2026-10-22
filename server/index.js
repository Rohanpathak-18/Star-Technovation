
import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/database.js";
import apiRoutes from "./routes/index.js";

const app = express();

const allowedOrigins = [
  "https://star-technovation.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`Origin not allowed by CORS: ${origin}`));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json({ limit: "1mb" }));

// Health check: verifies that Vercel can reach the Express app.
app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Star Technovation API",
  });
});

// Connect to MongoDB before handling API requests.
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
    console.error("Database connection failed:", error.message);
    res.status(503).json({ message: "Database unavailable" });
  }
});

app.use("/api", apiRoutes);

export default app;
