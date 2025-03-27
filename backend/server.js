const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const habitRoutes = require("./routes/habits");
const userRoutes = require("./routes/users");

app.use("/habitos", habitRoutes);
app.use("/usuarios", userRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.error("Error al conectar MongoDB:", err));

// Inicio del servidor
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));