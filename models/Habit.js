const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    usuario: { type: String, required: true },
    progreso: { type: Number, default: 0 },
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Habit', habitSchema);
