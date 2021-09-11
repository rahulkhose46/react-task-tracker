import React from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';
import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ title, tasks, onDelete, onToggle, onAdd, showAddTask,onShowAddTask }) => {
    const cardStyle = {
        width: '500px',
        margin: '0 auto',
        display: 'block'
    }
    const cardHeader = {
        textAlign: 'center',
        display: 'block'
    }
    const onClick = () => {
        console.log("On clicked.")
    }
    return (
        <div className="container">
            <div className="card" style={cardStyle}>
                <header className="card-header">
                    <p className="card-header-title" style={cardHeader}>
                        {title}
                    </p>
                    <Button bgColor = {showAddTask ? '#FF0000' : '#485fc7'} btnText={showAddTask ? 'CLOSE' : 'ADD'} onClick={onShowAddTask} />
                </header>
                <div className="card-content">
                    {
                        showAddTask ?
                            <div className="content">
                                <AddTask onAdd={onAdd} />
                            </div>
                            : ""
                    }
                    <h2 style={{ textAlign: 'center', padding: '10px', 'fontWeight': 'bold' }}>Task List </h2>
                </div>
                <footer className="card-footer">
                    {/* <a href="#" className="card-footer-item">Save</a>
                    <a href="#" className="card-footer-item">Edit</a>
                    <a href="#" className="card-footer-item">Delete</a> */}
                    <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
                </footer>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;

