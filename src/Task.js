import React from 'react';
import { useDispatch } from 'react-redux';
import {toggle} from './JS/Slice/taskSlice'




export default function Task(props) {
    const dispatch = useDispatch();
    const {task} = props
    
    return (
        <div>
        <input type="checkbox" checked={task.done} onChange={()=>dispatch(toggle())} />
        {task.description}
        </div>
    )
}