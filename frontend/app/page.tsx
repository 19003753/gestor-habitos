"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchHabitsThunk } from "../store/habitsSlice";
import Habits from "@/app/habits";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const habits = useSelector((state: RootState) => state.habits.habits);

  useEffect(() => {
    dispatch(fetchHabitsThunk());
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Habits habits={habits}/>
    </div>
  );
}