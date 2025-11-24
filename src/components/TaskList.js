import React, { useState } from "react";
import Task from './Task'

function TaskList({tasks}) {

  const displayTasks = tasks.map((task) => {
    return <Task key={task.id} task={task} onDelete={onDelete}/>
  })



  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks}
    </div>
  );
}

export default TaskList;
