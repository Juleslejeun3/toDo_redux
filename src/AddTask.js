import React from 'react'
import { useDispatch } from 'react-redux'
import {add} from './JS/Slice/taskSlice'
import { useState } from 'react'
function AddTask() {
    const [description, setDescription] = useState("")
    
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(add(description));
        setDescription("");
    }
    
       
    return (
        <div>
        <form onSubmit={handleSubmit}>    
        <div>   
        <label for="task">Tâche</label><br/>
        <input type="text" placeholder='ajouter tâche' value={description} onChange={(e) => setDescription(e.target.value)}/> 
        </div>
        <div>    
        <input type="submit" name="add" value="Add" />
        </div>
        </form>
        </div>
        )
    }
    
    export default AddTask