import React from "react";

function Task({ category, text}) {


  function handleDelete(event){
    event.preventDefault();
    
    if()
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
