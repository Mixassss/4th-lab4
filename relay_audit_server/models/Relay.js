import { Schema, model } from "mongoose";

const relaySchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  configuration: {
    tripTime: { type: Number, required: true },
    mode: { 
      type: String, 
      enum: ["auto", "manual"], 
      required: true 
    },
    voltageLevel: { type: Number, required: true },
    currentThreshold: { type: Number },
    sensitivity: { type: Number },
    delay: { type: Number }
  },
  uploadedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  reportFilePath: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model("Relay", relaySchema);