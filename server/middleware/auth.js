import jwt from "jsonwebtoken";
export function requireAuth(req, res, next) {
  try {
    const token = (req.headers.authorization || "").replace(/^Bearer\s+/i, "");
    if (!token)
      return res.status(401).json({ message: "Please sign in to continue." });
    req.user = jwt.verify(token, process.env.JWT_SECRET || "local-demo-secret");
    next();
  } catch {
    res
      .status(401)
      .json({ message: "Your session has expired. Please sign in again." });
  }
}
export function requireAdmin(req, res, next) {
  if (req.user?.role !== "admin")
    return res.status(403).json({ message: "Admin access required." });
  next();
}
