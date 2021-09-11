import React from 'react';
import Task from './Task';
const Tasks = ({ tasks , onDelete,onToggle}) => {
    return (
        <nav className="panel" style={{ width: '100%' }}>
            {  tasks.length > 0 ?
                tasks.map((task) => {
                    return (
                        <Task key={task.id} task={task}  onDelete={onDelete} onToggle={ onToggle }/>
                    )
                })
                : <h2 style={{padding:'10px',textAlign:'center'}}>Task is Empty...</h2>
            }
        </nav>
    )
}

export default Tasks;