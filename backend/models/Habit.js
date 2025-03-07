const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true},
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Habit', habitSchema);
