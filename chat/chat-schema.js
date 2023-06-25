import mongoose from "mongoose";
const chatSchema = new mongoose.Schema(
  {
    name: String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    created: { type: Date, default: Date.now },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "chat" }
);

export default chatSchema;