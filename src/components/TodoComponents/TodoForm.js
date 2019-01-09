import React from "react";

function ToDoForm(props) {
  return (
    <form onSubmit={props.addNewToDo}>
      <input
        value={props.toDo}
        type="text"
        name="toDo"
        placeholder="ToDoItem"
        onChange={props.handleChanges}
      />
      <button type="submit">AddToDo</button>
      <button type="clear">Clear Completed</button>
    </form>
  );
}

export default ToDoForm;
