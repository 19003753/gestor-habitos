"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchHabitsThunk } from "../store/habitsSlice";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const habits = useSelector((state: RootState) => state.habits.habits);

  useEffect(() => {
    dispatch(fetchHabitsThunk());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600">Lista de Hábitos</h1>
      <ul className="mt-6 space-y-4">
        {habits.map((habit) => (
          <li key={habit._id} className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{habit.nombre}</h3>
              <p className="text-gray-600">{habit.descripcion}</p>
              <ProgressBar />
            </div>
            <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
              Completar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}