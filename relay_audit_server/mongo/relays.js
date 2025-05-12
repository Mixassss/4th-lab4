import { Schema, model } from "mongoose";

const relaySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  configuration: {
    tripTime: { 
      type: Number, 
      required: true,
      min: 0,
      max: 1000 
    },
    mode: { 
      type: String, 
      enum: ["auto", "manual"], 
      required: true 
    },
    voltageLevel: { 
      type: Number, 
      required: true,
      min: 0 
    },
    currentThreshold: { 
      type: Number,
      min: 5,
      max: 100 
    },
    sensitivity: { 
      type: Number,
      min: 0.1,
      max: 1.0 
    },
    delay: {
      type: Number,
      min: 0,
      max: 10
    }
  },
  uploadedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  reportFilePath: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false // Убираем поле __v
});

// Добавляем индексы для быстрого поиска
relaySchema.index({ name: 1 });
relaySchema.index({ "uploadedBy": 1 });
relaySchema.index({ "createdAt": -1 });

export default model("Relay", relaySchema);