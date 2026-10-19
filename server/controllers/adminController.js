import Lead from "../models/Lead.js";
import Subscriber from "../models/Subscriber.js";
import User from "../models/User.js";
import { isMongoConnected } from "../config/database.js";
import { readLocal } from "../services/localStore.js";
export async function getOverview(req, res) {
  try {
    if (isMongoConnected())
      return res.json({
        leads: await Lead.find().sort({ createdAt: -1 }).limit(50).lean(),
        subscribers: await Subscriber.countDocuments(),
        users: await User.countDocuments(),
        database: "MongoDB",
      });
    const data = await readLocal();
    res.json({
      leads: data.leads.slice(0, 50),
      subscribers: data.subscribers.length,
      users: data.users.length,
      database: "Local JSON",
    });
  } catch {
    res.status(500).json({ message: "Could not load admin overview." });
  }
}
