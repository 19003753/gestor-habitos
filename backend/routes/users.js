const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

// registro de usuario
router.post("/register", async (req, res) => {
    try {
    const { name, lastname, email, password } = req.body;

    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente)
        return res.status(400).json({ message: "El usuario ya existe" });

    const user = new User({ name, lastname, email, password });
    await user.save();

    // crear token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    // enviar respuesta con token + datos del usuario
    res.status(201).json({
        message: "Usuario registrado correctamente",
        token,
        user: {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        },
    });
    } catch (err) {
    res.status(500).json({ message: "Error en el servidor" });
    }
});

//obtener todos los usuarios
router.get("/todos", async (req, res) => {
    try {
        const usuarios = await User.find({});
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
});

//eliminar todos los usuarios
router.delete("/eliminar-todos", async (req, res) => {
    try {
        await User.deleteMany({});
        res.json({ message: "Todos los usuarios han sido eliminados correctamente." });
    } catch (error) {
        console.error("Error al eliminar usuarios:", error);
        res.status(500).json({ message: "Error al eliminar usuarios." });
    }
});

//inicio de sesion
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

        const passwordValido = await bcrypt.compare(password, user.password);
        if (!passwordValido) return res.status(401).json({ message: "Contraseña incorrecta" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                lastname: user.lastname,
                email: user.email
            }
        });

    } catch (err) {
        res.status(500).json({ message: "Error en el servidor" });
    }
});

module.exports = router;