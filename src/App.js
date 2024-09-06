import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Load tasks from localStorage on initial render
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const updateTask = (task, updatedDetails) => {
        setTasks(tasks.map((t) => (t === task ? { ...t, ...updatedDetails } : t)));
    };

    const deleteTask = (task) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTasks(tasks.filter((t) => t !== task));
        }
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    );
};

export default App;
