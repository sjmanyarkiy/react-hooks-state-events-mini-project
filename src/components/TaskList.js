import React, { useState } from "react";
import Task from './Task'

function TaskList({tasks, onDelete}) {

  const displayTasks = tasks.map((task) => (
    <Task key={task.text} task={task} onDeleteTask={onDelete} />
  ));

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks}
    </div>
  );
}

export default TaskList;
