import React from "react";
import ReactDOM from "react-dom";

import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";

const toDoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.setState = {
      toDoList: toDoData,
      toDoItem: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewToDoItem = ev => {
    ev.preventDefault();
    this.setState({
      toDoList: [...this.state.toDoList, { toDoItem: this.state.toDoItem }],
      toDoItem: ""
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("render is running");
    return (
      <div className="App">
        {/* <ToDoList toDoDataList={this.state.toDoList} /> */}
        <ToDoForm
          addNewToDoItem={this.addNewToDoItem}
          handleChanges={this.handleChanges}
          // toDoItem={this.state.toDoItem}
        />
      </div>
    );
  }
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
