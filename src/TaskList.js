import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

function TaskList() {
    const task = useSelector((state) => state.task);
    return (
        <div className='list'>
        {task.map((t) => (
            <Task
              task={t}
              key={t.id}
            />
          ))}
        </div>
    )
}

export default TaskList;