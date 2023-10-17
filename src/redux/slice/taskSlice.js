import { createSlice } from "@reduxjs/toolkit";

const initialState = {count: 0,  tasks:[]};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = {
              id: Math.random() * 100,
              value: action.payload,
            };
            state.tasks.push(task);
            state.count += 1;
          },
          removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            state.count -= 1;
          },
          // editTask: (state, action) => {
            
          //   state.tasks = tasks.map((item) => 
          //     item.id === action.payload.id ? action.payload : item);
          // }
    }
});


export const {addTask, removeTask,editTask } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
