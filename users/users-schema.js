import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "spectator", "driver"],
      default: "driver",
    },
    team: {
      type: String,
      enum: [
        "Mercedes AMG Motorsport",
        "Red Bull Racing",
        "Aston Martin F1 Team",
        "McLaren",
        "Ferrari",
        "Alpine F1 Team",
        "AlphaTauri",
        "Alfa Romeo Racing",
        "Williams",
        "Haas F1 Team"
      ]
    },
    // chat: [{ type: mongoose.Schema.Types.ObjectId, ref: "chat" }],
    created: { type: Date, default: Date.now }
  },
  { collection: "users" }
);

export default usersSchema;
