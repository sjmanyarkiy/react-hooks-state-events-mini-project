import React, { useState } from "react";
import Task from './Task'

function TaskList({ tasks, onDeleteTask }) {

  // const [tasks, setTasks ] = useState([]);

  const displayTasks = tasks.map((task, index) => {
        return <Task key={index} task={task} onDeleteTask={onDeleteTask}/>
      })


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks}
    </div>
  );
}

export default TaskList;
