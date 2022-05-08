import { createSlice } from '@reduxjs/toolkit';


const taskSlice = createSlice({
    name: "task",
    initialState: [
        {
            id:Date.now(),
            description : "faire du sport",
            done : false,
        }
    ],
    reducers:{
        add: (state,action)=>{
            const newTask= {
                id : Date.now(),
                done : false,
                description : action.payload
            }
         state.push(newTask);
        },
        toggle: (state, action)=>{
            const task = state.find(t => t.id === action.payload);
            task.done =! task.done;
        },
        filter: (state, action)=>{
            state.filter(t => t.id !== action.payload)
        }
        }
})
export const { add, toggle, filter} = taskSlice.actions;
export default taskSlice.reducer;