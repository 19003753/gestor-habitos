const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    racha: { type: Number, default: 0 }, 
    lastupdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Habit", habitSchema);