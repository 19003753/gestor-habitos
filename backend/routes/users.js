const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

//registro de usuario
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const usuarioExistente = await User.findOne({ email });
        if (usuarioExistente) return res.status(400).json({ message: "El usuario ya existe" });

        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: "Usuario registrado correctamente" });
    } catch (err) {
        res.status(500).json({ message: "Error en el servidor" });
    }
});

//get all users
router.get("/users", async (req, res) => {
    try {
        const usuarios = await User.find({});
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
});

//login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

        const passwordValido = await bcrypt.compare(password, user.password);
        if (!passwordValido) return res.status(401).json({ message: "Contraseña incorrecta" });

        const token = jwt.sign({ id: user._id }, "secreto", { expiresIn: "1h" });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: "Error en el servidor" });
    }
});

module.exports = router;