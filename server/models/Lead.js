import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, default: "" },
    subject: { type: String, default: "Website enquiry" },
    message: { type: String, required: true },
    type: { type: String, default: "enquiry" },
  },
  { timestamps: true },
);
export default mongoose.model("Lead", schema);
