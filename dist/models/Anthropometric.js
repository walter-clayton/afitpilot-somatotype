"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const anthropometricSchema = new mongoose_1.Schema({
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    supraspinal_skinfold: { type: Number, required: true },
    subscapular_skinfold: { type: Number, required: true },
    tricep_skinfold: { type: Number, required: true },
    femur_breadth: { type: Number, required: true },
    humerus_breadth: { type: Number, required: true },
    calf_girth: { type: Number, required: true },
    bicep_girth: { type: Number, required: true },
    users: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    somatotype: { type: mongoose_1.Schema.Types.ObjectId, ref: "Somatotype" },
    createdAt: { type: String, default: new Date().toLocaleString() },
    updatedAt: { type: String, default: new Date().toLocaleString() },
});
module.exports = (0, mongoose_1.model)("Anthropometric", anthropometricSchema);
