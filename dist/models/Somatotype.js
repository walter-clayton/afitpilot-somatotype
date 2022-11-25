"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const somatotypeSchema = new mongoose_1.Schema({
    endomorphy: { type: Number, required: true },
    mesomorphy: { type: Number, required: true },
    ectomorphy: { type: Number, required: true },
    users: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    anthropometric: { type: mongoose_1.Schema.Types.ObjectId, ref: "Anthropometric" },
    createdAt: { type: String, default: new Date().toLocaleString() },
    updatedAt: { type: String, default: new Date().toLocaleString() },
});
module.exports = (0, mongoose_1.model)("Somatotype", somatotypeSchema);
