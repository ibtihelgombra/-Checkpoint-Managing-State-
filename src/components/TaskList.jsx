import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
    return (
        <div>
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;
