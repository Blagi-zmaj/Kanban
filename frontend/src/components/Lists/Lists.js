import React from "react";
import List from "./List.js";

class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listNames: ["Do zrobienia", "W trakcie", "Przełożone", "Zrobione"],
      tasks: [
        {
          _id: 12345,
          content: "Make RPG session",
          listName: "Do zrobienia"
        },
        {
          _id: 33221,
          content: "Do exercises",
          listName: "W trakcie"
        },
        {
          _id: 54321,
          content: "Play board games ",
          listName: "Przełożone"
        },
        {
          _id: 87573,
          content: "Make project",
          listName: "Zrobione"
        }
      ]
    };

    this.addTask = this.addTask.bind(this);
    this.updateTaskList = this.updateTaskList.bind(this);
  }

  updateTaskList(delTask, addTask) {
    console.log("Odpowiedz z updateTaskList");
    console.log("Delete: " + delTask.listName);
    console.log("Add: " + addTask.listName);
    const tasks = [...this.state.tasks];

    this.setState({ tasks });
  }

  addTask() {
    const taskss = [...this.state.tasks];
    taskss.push({
      _id: 4636,
      content: "Kupic buraka",
      listName: "Do zrobienia"
    });
    console.log(taskss);
    this.setState({ tasks: taskss });
    this.forceUpdate();
  }

  componentDidUpdate() {
    console.log("Ilosc zadan z lists: " + this.state.tasks.length);
  }

  render() {
    return (
      <div className="listBox">
        {this.state.listNames.map((list) => (
          <List
            updateTasks={(del, add) => {
              this.updateTaskList(del, add);
            }}
            tasks={this.state.tasks}
            key={list.id}
            listName={list}
          />
        ))}
      </div>
    );
  }
}

export default Lists;
