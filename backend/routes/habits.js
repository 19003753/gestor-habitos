const express = require("express");
const Habit = require("../models/Habit");
const router = express.Router();

// get habits
router.get("/", async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener hábitos" });
  }
});

// create
router.post("/", async (req, res) => {
  try {
    const nuevoHabito = new Habit(req.body);
    await nuevoHabito.save();
    res.json(nuevoHabito);
  } catch (err) {
    res.status(500).json({ message: "Error al crear el hábito" });
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    await Habit.findByIdAndUpdate
    (req.params.id, req.body);
    res.json({ message: "Hábito actualizado" });
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar el hábito" });
  }
}
);

// delete
router.delete("/:id", async (req, res) => {
  try {
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: "Hábito eliminado" });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar el hábito" });
  }
});

module.exports = router;