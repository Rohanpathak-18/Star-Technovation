
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
      // Permit requests without an Origin header, such as server-to-server calls.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.json({ status: "ok", service: "Star Technovation API" });
});

app.use("/api", apiRoutes);

// Connect once per serverless instance; handle connection errors.
let databaseConnection;

app.use(async (req, res, next) => {
  try {
    if (!databaseConnection) {
      databaseConnection = connectDatabase();
    }

    await databaseConnection;
    next();
  } catch (error) {
    databaseConnection = undefined;
    console.error("Database connection failed:", error.message);
    res.status(503).json({ message: "Database unavailable" });
  }
});

export default app;
