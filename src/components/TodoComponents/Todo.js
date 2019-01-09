import React from "react";

const ToDo = props => {
  return (
    <div key={props.toDo.id} className="ToDo">
      <p>{props.toDo.task}</p>
    </div>
  );
};

export default ToDo;
