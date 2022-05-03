import React from 'react'
import Task from './Task'

export default function TaskList(todo) {
    
    return (
        <div>
        <h3>Todo List</h3>
        <ul>
        <li>
        <Task key={todo.id}/>
        </li>
        </ul>
        </div>
    )
}
