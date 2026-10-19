import Lead from "../models/Lead.js";
import Subscriber from "../models/Subscriber.js";
import { isMongoConnected } from "../config/database.js";
import { insertLocal, readLocal, writeLocal } from "../services/localStore.js";
const validEmail = (email) => /^\S+@\S+\.\S+$/.test(email || "");
export async function createContact(req, res) {
  try {
    const {
      name,
      email,
      phone = "",
      subject = "Website enquiry",
      message,
      type = "enquiry",
    } = req.body;
    if (!name?.trim() || !validEmail(email) || !message?.trim())
      return res.status(400).json({
        message: "Please add your name, a valid email and a message.",
      });
    const entry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
      type,
    };
    const lead = isMongoConnected()
      ? await Lead.create(entry)
      : await insertLocal("leads", entry);
    res.status(201).json({
      message: "Thanks — our team will be in touch shortly.",
      lead: { id: lead._id, createdAt: lead.createdAt },
    });
  } catch {
    res
      .status(500)
      .json({ message: "We could not save your enquiry. Please try again." });
  }
}
export async function subscribe(req, res) {
  try {
    const email = (req.body.email || "").trim().toLowerCase();
    if (!validEmail(email))
      return res.status(400).json({ message: "Enter a valid email address." });
    if (isMongoConnected())
      await Subscriber.updateOne(
        { email },
        { $setOnInsert: { email } },
        { upsert: true },
      );
    else {
      const data = await readLocal();
      if (!data.subscribers.some((item) => item.email === email)) {
        data.subscribers.push({ email, createdAt: new Date().toISOString() });
        await writeLocal(data);
      }
    }
    res.status(201).json({ message: "You’re on the list. Watch your inbox." });
  } catch {
    res.status(500).json({ message: "Subscription failed. Please try again." });
  }
}
