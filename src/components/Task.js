import React from "react";
import '../styles/task.css'
import { AiOutlineCheckCircle } from "react-icons/ai";

function Task({ id, text, finished, finishTask, deleteTask}) {
    return (
        <div className={finished ? 'task-container finished' : 'task-container'}>
            <div className="task-text"
            onClick={() => finishTask(id)}>
                {text}
            </div>
            <div className="task-icon-container"
            onClick={() => deleteTask(id)}>
               <AiOutlineCheckCircle className="task-icon"/>
            </div>
        </div>
    );
}
export default Task;