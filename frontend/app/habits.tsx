"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { updateStreakThunk, fetchHabitsThunk } from "../store/habitsSlice";
import ProgressBar from "@/components/ProgressBar";

type Habit = {
    _id: string;
    nombre: string;
    descripcion: string;
    usuario: string;
    racha: number; 
    lastupdate: string;
};

export default function Habits() {
    const dispatch = useDispatch<AppDispatch>();
    const habits = useSelector((state: RootState) => state.habits.habits);
    
    
    const [updatedHabits, setUpdatedHabits] = useState<Record<string, string>>({});

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
    };

    
    const handleMarkAsDone = async (habitId: string) => {
        try {
            const response = await dispatch(updateStreakThunk(habitId)).unwrap();

            
            if (response.racha !== undefined) {
                setUpdatedHabits((prev) => ({
                    ...prev,
                    [habitId]: "success",
                }));
            } else {
                setUpdatedHabits((prev) => ({
                    ...prev,
                    [habitId]: "warning",
                }));
            }

            dispatch(fetchHabitsThunk());
        } catch (error) {
            console.error("Error al actualizar el hábito:", error);
        }
    };

    return (
        <div className="w-full max-w-md p-4 bg-white text-black rounded-lg shadow-md mt-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Hábitos</h1>
            <ul className="space-y-4">
                {habits.map((habit) => ( 
                    <li className="flex items-center justify-between" key={habit._id}>
                        <div className="text-left">

                            {/* name, descripction, streak and lastupdate */}
                            <span className="text-black font-semibold">{habit.nombre} </span>
                            <span className="text-gray-500 text-sm">/ {habit.descripcion}</span> 
                            <p className="text-gray-500 text-sm">Racha: {habit.racha} días</p>
                            <p className="text-gray-400 text-xs">Última actualización: {formatDate(habit.lastupdate)}</p>

                            {/* progress bar */}
                            <ProgressBar progress={(habit.racha / 66) * 100} />
                            
                            {/* msg depending on result*/}
                            {updatedHabits[habit._id] === "success" && (
                                <p className="text-green-500 text-sm mt-1">Hábito actualizado. Nos vemos mañana!</p>
                            )}
                            {updatedHabits[habit._id] === "warning" && (
                                <p className="text-yellow-500 text-sm mt-1">No se puede actualizar el hábito el mismo día.</p>
                            )}
                        </div>
                        
                            {/* button deactivation */}
                            <button 
                            onClick={() => handleMarkAsDone(habit._id)}
                            className={`px-2 py-1 text-sm text-white rounded transition-all 
                            ${updatedHabits[habit._id] ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                            disabled={updatedHabits[habit._id] !== undefined}>Hecho</button>

                    </li>
                ))}
            </ul>
        </div>
    );
}