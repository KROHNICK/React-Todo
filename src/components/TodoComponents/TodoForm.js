import React from "react";

const ToDoForm = props => {
  console.log(props.toDo);
  return (
    <form onSubmit={props.addNewToDoItem}>
      <input
        value={props.value}
        type="text"
        name="toDoItem"
        placeholder=".. TO DO"
        onChange={props.handleChanges}
      />
      <button type="submit">AddToDo</button>
      <button type="clear">Clear Completed</button>
    </form>
  );
};

export default ToDoForm;
