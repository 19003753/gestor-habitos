const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.error("Error al conectar MongoDB:", err));

// Rutas
const habitRoutes = require("./routes/habits");
app.use("/habitos", habitRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));