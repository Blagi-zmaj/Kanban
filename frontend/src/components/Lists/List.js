import React, { useState } from "react";
import Tasks from "../Tasks/Tasks.js";

function List(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const updateTasks = () => {
    setTasks(props.tasks);
    console.log("Zadania z List: " + props.tasks[3].listName);
  };

  return (
    <div className="listElement">
      <h4>Lista: {props.listName}</h4>
      <Tasks
        updateTasks={(del, add) => {
          props.updateTasks(del, add);
        }}
        listName={props.listName}
        tasks={props.tasks}
      />
    </div>
  );
}

export default List;
