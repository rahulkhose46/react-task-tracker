import React from 'react';
const Task = ({task,onDelete,onToggle}) => {
    return (
        <div className={`panel-block ${task.reminder ? 'taskreminder' : ''}`} onDoubleClick={()=>{onToggle(task.id)}}>
            <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            <span style={{ textAlign:'left',float: 'left', minWidth:'200px',width: '200px' }}>{task.text}</span>
            <span style={{ textAlign:'left',float: 'right',minWidth:'140px',width:'140px' }}>{task.day}</span>
            <span onClick={()=>{onDelete(task)}} className="card-footer-item">Delete</span>
        </div>
    )
}

export default Task;