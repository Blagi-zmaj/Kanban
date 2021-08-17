import React, { useState } from "react";

function EditTask(props) {
  const [newContent, setNewContent] = useState(props.content);
  const [newListName, setNewListName] = useState(props.listName);

  const contentChange = (event) => {
    const contentValue = event.target.value;
    setNewContent(contentValue);
  };

  const listNameChange = (event) => {
    const listName = event.target.value;
    setNewListName(listName);
  };

  const editTask = () => {
    const updatedTask = {
      content: newContent,
      listName: newListName,
      _id: props.id
    };
    props.onUpdate(updatedTask);
  };

  return (
    <div>
      <label for="content"></label>
      <input
        type="text"
        value={newContent}
        onChange={contentChange}
        id="content"
      ></input>
      <label for="listName"></label>
      <input
        type="text"
        value={newListName}
        onChange={listNameChange}
        id="listName"
      ></input>
      {/* <button onClick={props.onCancel}>Anuluj</button> */}
      <button onClick={editTask}>Potwierdź</button>
    </div>
  );
}

export default EditTask;
