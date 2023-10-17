import { createSlice } from "@reduxjs/toolkit";

const initialState = {tasks:[]};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    }
});

export const taskReducer = usersSlice.reducer;
export const { } = taskSlice.actions;