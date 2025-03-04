require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Habit = require('./models/Habit');

const app = express();
app.use(express.json());
app.use(cors());

// obtener habitos
app.get('/habitos', async (req, res) => {
    const habitos = await Habit.find();
    res.json(habitos);
});

// crear
app.post('/habitos', async (req, res) => {
    try {
    const nuevoHabito = new Habit(req.body);
    await nuevoHabito.save();
    res.json(nuevoHabito);
    }
    catch(err){
        res.json({message: "error al crear el habito"});
    }
});

// actualizar
app.put('/habitos/:id', async (req, res) => {
    try {
    const habito = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(habito);
    }
    catch(err){
        res.json({message: "error al actualizar el habito"});
    }
});

// eliminar
app.delete('/habitos/:id', async (req, res) => {
    try {
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: "Hábito eliminado" });
    }
    catch(err){
        res.json({message: "error al eliminar el habito"});
    }
});

// conexion a db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("conectado a mongodb atlas"))
.catch(err => console.error("conexion fallida al servidor", err));

app.listen(5000, () => console.log("Servidor corriendo en http://localhost:5000"));
