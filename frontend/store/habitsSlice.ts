import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Habit = {
  _id: string;
  nombre: string;
  descripcion: string;
  progreso: number;
};

type HabitsState = {
  habits: Habit[];
};

const initialState: HabitsState = {
  habits: [],
};

// get from backend
export const fetchHabitsThunk = createAsyncThunk("habits/fetchHabits", async () => {
  const response = await fetch("http://localhost:5002/habitos");
  return await response.json();
});

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHabitsThunk.fulfilled, (state, action) => {
      state.habits = action.payload;
    });
  },
});

export default habitsSlice.reducer;