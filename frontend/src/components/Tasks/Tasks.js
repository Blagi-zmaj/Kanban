import React from "react";
import Task from "./Task.js";
import NewTask from "./NewTask.js";
import EditTask from "./EditTask.js";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: props.listName,
      tasks: props.tasks,
      showEditWindow: false,
      editNoteObject: {},
      selectedList: "status"
    };
    this.handleListChange = this.handleListChange.bind(this);
  }

  componentDidUpdate() {
    // console.log("Ilosc zadan z Tasks: " + this.state.tasks.length);
  }

  deleteTask(id) {
    const tasks = [...this.state.tasks].filter((task) => task._id !== id);
    this.setState({ tasks: tasks });
  }

  addTask(task) {
    const actualTasksList = [...this.state.tasks];
    actualTasksList.push(task);
    this.setState({ tasks: actualTasksList });
  }

  editTask(task) {
    const actualTasksList = [...this.state.tasks];
    const toUpdateTaskIndex = actualTasksList.findIndex((exercise) => {
      return exercise._id === task._id;
    });
    actualTasksList[toUpdateTaskIndex] = task;
    this.setState({ tasks: actualTasksList });
    this.toggleEditWindow();
  }

  toggleEditWindow() {
    this.setState({ showEditWindow: !this.state.showEditWindow });
  }

  handleEditTask(task) {
    this.toggleEditWindow();
    this.setState({ editNoteObject: task });
  }

  handleListChange(task) {
    const lists = [...this.state.lists];
    const tasksUp = [...this.state.tasks];
    tasksUp.push(task);
    this.setState({ tasks: tasksUp });
  }

  render() {
    return (
      <div>
        <NewTask
          onAdd={(task) => {
            this.addTask(task);
          }}
          listName={this.state.lists}
        />

        <br />
        <br />
        {this.state.showEditWindow && (
          <EditTask
            id={this.state.editNoteObject._id}
            content={this.state.editNoteObject.content}
            listName={this.state.editNoteObject.listName}
            onUpdate={(task) => {
              this.editTask(task);
            }}
            onCancel={this.toggleEditWindow}
          />
        )}
        <br />

        {this.state.tasks.map((task) =>
          task.listName === this.state.lists ? (
            <Task
              updateTasks={(del, add) => {
                this.props.updateTasks(del, add);
              }}
              refresh={() => this.forceUpdate()}
              key={task._id}
              listName={task.listName}
              id={task._id}
              content={task.content}
              selected={this.state.selectedList}
              changeList={(task) => this.handleListChange(task)}
              whenDelete={(id) => this.deleteTask(id)}
              whenEdit={(task) => {
                this.handleEditTask(task);
              }}
            />
          ) : null
        )}
      </div>
    );
  }
}

export default Tasks;
