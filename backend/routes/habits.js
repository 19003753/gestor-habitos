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

// delete all
router.delete('/eliminar-todos', async (req, res) => {
  try {
      await Habit.deleteMany({});
      res.json({ message: "Todos los hábitos han sido eliminados." });
  } catch (err) {
      console.error("Error al eliminar los hábitos:", err);
      res.status(500).json({ message: "Error al eliminar los hábitos." });
  }
});

// update streak
router.put('/marcar/:id', async (req, res) => {
  try {
      const habit = await Habit.findById(req.params.id);
      if (!habit) return res.status(404).json({ message: "Hábito no encontrado" });

      const hoy = new Date();
      const ultimaFecha = new Date(habit.lastupdate);

      const diferenciaDias = Math.floor((hoy - ultimaFecha) / (1000 * 60 * 60 * 24));

      console.log("Fecha actual:", hoy);
      console.log("Última actualización:", ultimaFecha);
      console.log("Días de diferencia:", diferenciaDias);
      console.log("Racha actual:", habit.racha);

      //update if streak is 0
      if (habit.racha === 0) {
          habit.racha += 1;
          habit.lastupdate = hoy;
          await habit.save();
          return res.json(habit);
      }

      //update if streak is 1 and is at least 1 day diff
      if (habit.racha >= 1 && diferenciaDias >= 1) {
          habit.racha += 1;
          habit.lastupdate = hoy;
          await habit.save();
          return res.json(habit);
      }

      // reset automatically if is not updated in more than 1 day diff to the last update
      if (diferenciaDias > 1) {
        habit.racha = 0;
        habit.lastupdate = hoy;
        await habit.save();
        return res.json(habit);
    }

      console.log("El hábito ya fue marcado hoy, no se aumenta la racha.");
      return res.json({ message: "El hábito ya fue marcado hoy, no se aumenta la racha.", habit });

  } catch (err) {
      console.error("Error en la API:", err);
      res.status(500).json({ message: "Error al actualizar el hábito" });
  }
});


// create 1
router.post("/", async (req, res) => {
  try {
    const nuevoHabito = new Habit(req.body);
    await nuevoHabito.save();
    res.json(nuevoHabito);
  } catch (err) {
    res.status(500).json({ message: "Error al crear el hábito" });
  }
});

// delete 1
router.delete('/eliminar/:id', async (req, res) => {
  try {
      const habit = await Habit.findByIdAndDelete(req.params.id);
      if (!habit) {
          return res.status(404).json({ message: "Hábito no encontrado" });
      }
      res.json({ message: "Hábito eliminado con éxito", habit });
  } catch (err) {
      console.error("Error al eliminar el hábito:", err);
      res.status(500).json({ message: "Error al eliminar el hábito" });
  }
});

module.exports = router;