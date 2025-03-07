import { createSlice } from "@reduxjs/toolkit";
import { fetchHabits } from "./habitsAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { create } from "domain";

type Habit = {
    _id: string;
    nombre: string;
    descripcion: string;
}

type HabitsState = {
    habits: Habit[];
}

const initialState: HabitsState = {
    habits: [],
}

export const fetchHabitsThunk = createAsyncThunk("habits/fetchHabits", async () => {
    return await fetchHabits();
});

const habitsSlice = createSlice({
    name: "habit",
    initialState,
    reducers: {
        addHabits(state, action) {
            state.habits = action.payload;
        },
        addHabit(state, action) {
            state.habits.push(action.payload);
        },
        removeHabit(state, action) {
            state.habits = state.habits.filter(habit => habit._id !== action.payload);
        },
    },

    extraReducers: builder => {
        builder.addCase(fetchHabitsThunk.fulfilled, (state, action) => {
            state.habits = action.payload;
        });
    },
});

export const { addHabits, addHabit, removeHabit } = habitsSlice.actions;
export default habitsSlice.reducer;