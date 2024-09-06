import { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName && taskDescription) {
            addTask({ taskName, taskDescription, completed: false });
            setTaskName('');
            setTaskDescription('');
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
            />
            <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Task Description"
            />
            {error && <p>Please fill in all fields</p>}
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
