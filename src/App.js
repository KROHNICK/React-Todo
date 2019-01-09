import React from "react";
import ReactDOM from "react-dom";

import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: [],
      toDoItem: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewToDoItem = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.toDoItem,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDo: [...this.state.toDo, newTodo],
      toDoItem: ""
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("render is running");
    return (
      <div>
        <ToDoList toDo={this.state.toDo} />
        <ToDoForm
          value={this.state.toDoItem}
          handleChanges={this.handleChanges}
          addNewToDoItem={this.state.addNewToDoItem}
        />
      </div>
    );
  }
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
