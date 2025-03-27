const express = require("express");
const Habit = require("../models/Habit");
const router = express.Router();

//obtener todos los habitos 
router.get("/todos", async (req, res) => {
  try {
    const habitos = await Habit.find();
    res.json(habitos);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener todos los hábitos", err });
  }
});

// get habits
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const habitos = await Habit.find({ usuario: userId });
    const hoy = new Date();

    for (let habito of habitos) {
      const ultima = new Date(habito.lastupdate);
      const diferenciaDias = Math.floor((hoy.getTime() - ultima.getTime()) / (1000 * 60 * 60 * 24));

      if (diferenciaDias >= 1 && habito.racha > 0) {
        habito.racha = 0;
        await habito.save();
      }
    }

    res.json(habitos);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener hábitos", err });
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

      /*
      console.log(" ");
      console.log("Nombre del Habito: ", habit.nombre);
      console.log("Fecha actual:", hoy);
      console.log("Última actualización:", ultimaFecha);
      console.log("Días de diferencia:", diferenciaDias, " días.");
      console.log("Racha actual:", habit.racha, " días.");
      */

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

      console.log("El hábito ya fue marcado hoy, no se aumenta la racha.");
      console.log(" ");
      return res.json({ message: "El hábito ya fue marcado hoy, no se aumenta la racha.", habit });

  } catch (err) {
      console.error("Error en la API:", err);
      res.status(500).json({ message: "Error al actualizar el hábito" });
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

// delete
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