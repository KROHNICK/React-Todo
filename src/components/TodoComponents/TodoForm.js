import React from "react";

const ToDoForm = props => {
  return (
    <form>
      <input
        value={props.value}
        type="text"
        name="todo"
        placeholder=".. TO DO"
        onChange={props.handleChanges}
      />
      <button onClick={props.handleAddTodo}>Add To Do</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default ToDoForm;
