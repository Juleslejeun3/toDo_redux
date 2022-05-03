import { createSlice } from '@reduxjs/toolkit';

export const initialState= {
tasks: [
    {
        id:Date.now(),
        description:"",
        isDone:false
    }
]
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{
        task: (state,action)=>{
            state.tasks = action.payload;
            state.tasks[0].isDone = false
        },
        add: (state,action)=>{
            state.tasks[0].description.unshift(action.payload);
            state.tasks[0].isDone=false
        },
        filter: (state, action)=>{
            state.tasks.filter( (t) => {
                return t.id === action.payload.id ? "Done" : "Not Done"
            });
            state.isDone = true
        },
        }
})
export const {task, add, filter} = taskSlice.actions;
export default taskSlice.reducer;