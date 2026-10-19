import bcrypt from "bcryptjs";
import { randomUUID } from "node:crypto";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { isMongoConnected } from "../config/database.js";
import { readLocal, writeLocal } from "../services/localStore.js";
function issueToken(user) {
  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
  return {
    token: jwt.sign(payload, process.env.JWT_SECRET || "local-demo-secret", {
      expiresIn: "7d",
    }),
    user: { name: user.name, email: user.email, role: user.role },
  };
}
export async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const normalized = (email || "").trim().toLowerCase();
    if (
      !name?.trim() ||
      !/^\S+@\S+\.\S+$/.test(normalized) ||
      !password ||
      password.length < 8
    )
      return res.status(400).json({
        message:
          "Add your name, a valid email and a password with at least 8 characters.",
      });
    const hashed = await bcrypt.hash(password, 10);
    const role =
      process.env.ADMIN_EMAIL?.toLowerCase() === normalized ? "admin" : "user";
    let user;
    if (isMongoConnected()) {
      if (await User.exists({ email: normalized }))
        return res
          .status(409)
          .json({ message: "An account with this email already exists." });
      user = await User.create({
        name: name.trim(),
        email: normalized,
        password: hashed,
        role,
      });
    } else {
      const data = await readLocal();
      if (data.users.some((item) => item.email === normalized))
        return res
          .status(409)
          .json({ message: "An account with this email already exists." });
      user = {
        _id: randomUUID(),
        name: name.trim(),
        email: normalized,
        password: hashed,
        role,
      };
      data.users.push(user);
      await writeLocal(data);
    }
    res.status(201).json(issueToken(user));
  } catch {
    res
      .status(500)
      .json({ message: "Could not create the account. Please try again." });
  }
}
export async function login(req, res) {
  try {
    const email = (req.body.email || "").trim().toLowerCase();
    const data = isMongoConnected() ? null : await readLocal();
    const user = isMongoConnected()
      ? await User.findOne({ email })
      : data.users.find((item) => item.email === email);
    if (
      !user ||
      !(await bcrypt.compare(req.body.password || "", user.password))
    )
      return res
        .status(401)
        .json({ message: "Email or password is incorrect." });
    res.json(issueToken(user));
  } catch {
    res.status(500).json({ message: "Sign in failed. Please try again." });
  }
}
