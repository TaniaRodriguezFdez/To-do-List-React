import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../styles/ToDoList.css';

function ToDoList(params) {

    const [tasks, setTasks] = useState([]);


    return (
        <>
            <TaskForm />
            <div className="task-list-container">
                {
                tasks.map((task) =>
                   <task
                    text={task.text}
                    finished={task.finished}
                   />
                )

                
                }
            </div>
        </>
    )
}
export default ToDoList