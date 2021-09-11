import React, { useState } from 'react';
const addBtnStyle = {
    padding: '10px',
    height: '30px',
    margin: '10px 10px'
}
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);
    const submitTask = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Please add task..");
            return
        }
        onAdd({ text, day, reminder });
        clearTask();
    }
    const clearTask = () => {
        setText("");
        setDay("");
        setReminder(false);
    }
    return (
        <form onSubmit={(e) => { submitTask(e) }}>
            <div className="field">
                <label className="label">Task</label>
                <div className="control">
                    <input className="input" type="text" value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Add Task" />
                </div>
            </div>
            <div className="field">
                <label className="label">Day & Time</label>
                <div className="control">
                    <input className="input" type="text" value={day} onChange={(e) => { setDay(e.target.value) }} placeholder="Day & Time" />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <label className="label checkbox">
                        <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => { setReminder(e.currentTarget.checked) }} />
                        &nbsp; set reminder
                    </label>
                </div>
            </div>
            <div className="control">
                <button style={addBtnStyle} className="button is-link">Save Task</button>
            </div>
        </form>
    )
}

export default AddTask;