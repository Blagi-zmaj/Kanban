import React, { useState } from "react";
import { useTasks } from "./TaskProvider";

export default function EditTask({ _id, content, listName, doShowModal }) {
  const [taskContent, setTaskContent] = useState(content);
  const [taskListName, setTaskListName] = useState(listName);
  const { editTask } = useTasks();

  const editContent = (event) => {
    const contentValue = event.target.value;
    setTaskContent(contentValue);
  };

  const editListName = (event) => {
    const listNameValue = event.target.value;
    setTaskListName(listNameValue);
  };

  const edittedTask = {
    _id: _id,
    content: taskContent,
    listName: taskListName
  };

  const confirmEdit = () => {
    doShowModal(false);
    editTask(edittedTask);
  };

  return (
    <div>
      <label htmlFor="content"></label>
      <input
        value={taskContent}
        onChange={editContent}
        type="text"
        id="content"
      ></input>
      <label htmlFor="listName"></label>
      <input
        value={taskListName}
        onChange={editListName}
        type="text"
        id="listName"
      ></input>
      <button onClick={confirmEdit}>Potwierdź</button>
      <button onClick={() => doShowModal(false)}>Anuluj</button>
    </div>
  );
}
