import React from "react";
import '../styles/form.css';
function TaskForm(props) {
    return (
        <form className="task-form">
            <input
               className="task-input" 
               type="text"
               placeholder="write a task"
               name="text"

             />
         <button className="task-btn">ADD TASK</button>   
        
        </form>
    );
}
export default TaskForm