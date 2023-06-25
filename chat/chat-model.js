import mongoose from "mongoose";
import chatSchema from "./chat-schema.js";
const chatModel = mongoose.model("chat", chatSchema);
export default chatModel;
