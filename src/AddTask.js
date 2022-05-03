import React from 'react'
import { useDispatch } from 'react-redux'
import * as allTask from './JS/Slice/taskSlice'

function AddTask() {
    
    const dispatch = useDispatch()
       
    return (
        <div>
        <form className='addTask' onSubmit={() => dispatch(allTask.task())}>    
        <div>   
        <label for="task">Tâche</label><br/>
        <input type="textarea" name="task" rows='10px' cols='30px' onChange={() => dispatch(allTask.add())}/> 
        </div>
        <div>    
        <input type="submit" name="add" value="Add" />
        </div>
        </form>
        </div>
        )
    }
    
    export default AddTask