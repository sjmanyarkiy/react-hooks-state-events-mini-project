import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [ selectedCategory, setSelectedCategory ] = useState("All");
  const [ tasks, setTasks ] = useState(TASKS);

  function handleDelete(text) {
    setTasks(tasks.filter(task => task.text !== text));
  }

  function handleCategorySelect(category){
    setSelectedCategory(category)
  }

  const tasksToDisplay = selectedCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);


  function handleAddItem(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectedCategory={handleCategorySelect} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddItem} />
      <TaskList tasks={tasksToDisplay} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
