import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Navbar from './components/Navbar';
import About from './components/About';
const headerStyle = {
  marginTop: "30px"
}
function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([])

  // Fetch Tasks OnPageLoad Using useEffect Hooks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])

  // Fetch Tasks From JSON server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();
    return data;
  }

  // Fetch Tasks From JSON server
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    return data;
  }

  // Delte Task
  const deleteTask = async (task) => {
    await fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: "DELETE"
    });
    setTasks(tasks.filter((item) => item.id !== task.id));
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, 'reminder': !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json();
    // setTasks([...tasks,data]);
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, "reminder": data.reminder } : task));
  }

  // Add Task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 1000);
    // task['id'] = id;
    // console.log(task,id);
    //setTasks([...tasks, { ...task, id }])
  }

  // Toggle Add Task Panel
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }
  return (
    <div className="container App">
      <div className="column">
        <Router>
          {/* <Switch> Not need*/}
            <Navbar />
            <Route exact path="/" render={(props) => {
              return (
                <header className="App-header" style={headerStyle}>
                  <Header
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                    onAdd={addTask}
                    showAddTask={showAddTask}
                    onShowAddTask={toggleAddTask}
                  />
                </header>
              )
            }}></Route>
            <Route  path="/about" render={(props) => {
              return (
                <About />
              )
            }}>
            </Route>
          {/* </Switch> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
