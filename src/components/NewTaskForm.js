import React, { useState } from "react";

// Receive categories and the submission handler as props
function NewTaskForm({ categories, onTaskFormSubmit }) {
  // 1. Initialize local state for form inputs
  const [text, setText] = useState("");
  
  // Find the first non-"All" category to use as the default selected value
  const defaultCategory = categories.find((cat) => cat !== "All");
  const [category, setCategory] = useState(defaultCategory || "");

  // 2. Define the form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // crucial: prevents the browser from reloading the page

    // Create the new task object
    const newTask = { text, category };

    // Call the callback prop with the new task data
    onTaskFormSubmit(newTask);

    // Reset the form fields after successful submission
    setText("");
    // Optionally reset the category: setCategory(defaultCategory || "");
  };

  // 3. Prepare category options (filtering out "All")
  const categoryOptions = categories
    .filter((cat) => cat !== "All")
    .map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ));

  return (
    // 4. Attach the onSubmit handler
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text} // Controlled value
          onChange={(e) => setText(e.target.value)} // Update state on change
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category} // Controlled value
          onChange={(e) => setCategory(e.target.value)} // Update state on change
        >
          {categoryOptions} {/* Render the filtered options */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;