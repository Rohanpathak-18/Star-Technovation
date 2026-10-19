import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { connectDatabase } from "./config/database.js";
import apiRoutes from "./routes/index.js";

const app = express();
const port = Number(process.env.PORT || 5003);
const serverDir = path.dirname(fileURLToPath(import.meta.url));
app.use(cors({ origin: process.env.CLIENT_URL || true }));
app.use(express.json({ limit: "1mb" }));
app.use("/api", apiRoutes);
app.use(express.static(path.join(serverDir, "../client/dist")));
app.get("*", (req, res, next) =>
  req.path.startsWith("/api/")
    ? next()
    : res.sendFile(path.join(serverDir, "../client/dist/index.html")),
);
const server = app.listen(port, () => {
  console.log(`Star Technovation server ready on http://localhost:${port}`);
  connectDatabase();
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `Port ${port} is already in use. Stop the other server, or set a free PORT in .env and match it in client/vite.config.js.`,
    );
    process.exit(1);
  }

  console.error("The Star Technovation server could not start:", error.message);
  process.exit(1);
});
