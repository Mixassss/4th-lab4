import { Schema, model } from "mongoose";

// Описание схемы для пользователя
const userSchema = new Schema({
    login: { type: String, required: true, unique: true }, // Логин
    password: { type: String, required: true },
}, {
    timestamps: true, // Автоматическое добавление полей createdAt и updatedAt
});

// Экспортируем модель User
export default model("User", userSchema);