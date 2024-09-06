import { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTaskName, setUpdatedTaskName] = useState(task.taskName);
    const [updatedTaskDescription, setUpdatedTaskDescription] = useState(task.taskDescription);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        updateTask(task, { taskName: updatedTaskName, taskDescription: updatedTaskDescription });
        setIsEditing(false);
    };

    return (
        <div className={task.completed ? 'task-completed' : 'task-active'}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={updatedTaskName}
                        onChange={(e) => setUpdatedTaskName(e.target.value)}
                    />
                    <textarea
                        value={updatedTaskDescription}
                        onChange={(e) => setUpdatedTaskDescription(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Update</button>
                </>
            ) : (
                <>
                    <h3>{task.taskName}</h3>
                    <p>{task.taskDescription}</p>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => updateTask(task, { completed: !task.completed })}
                    />
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => deleteTask(task)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default TaskItem;
