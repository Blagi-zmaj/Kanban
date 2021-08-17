import React, { useState } from "react";
import { useTasks } from "./TaskProvider";

export default function Task({ _id, content, listName, edit }) {
  const { removeTask, editTask } = useTasks();
  const [newListName, setListName] = useState(listName);
  const [showConfirm, setShowConfirm] = useState(false);
  const task = {
    _id: _id,
    content: content,
    listName: newListName
  };
  const listNameChange = (event) => {
    const listValue = event.target.value;
    setListName(listValue);
    setShowConfirm(true);
    task.listName = newListName;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirm(false);
    editTask(task);
  };

  const cancelChangeList = () => {
    setListName(listName);
  };

  return (
    <div className="task">
      {_id} <br />
      <p>
        {content} <br />
      </p>
      {listName} <br />
      <button onClick={() => removeTask(_id)}>Usun</button>
      <button onClick={() => edit(task)}>Edytuj</button>
      <form onSubmit={handleSubmit}>
        <select value={newListName} onChange={listNameChange}>
          <option value="Status">Status</option>
          <option value="Do zrobienia">Do zrobienia</option>
          <option value="W trakcie">W trakcie</option>
          <option value="Przełożone">Przełożone</option>
          <option value="Zrobione">Zrobione</option>
        </select>
        {showConfirm ? (
          <>
            <button onClick={cancelChangeList}>Anuluj</button>
            <input type="submit" value="Potwierdz"></input>
          </>
        ) : null}
      </form>
      <br />
      <br />
    </div>
  );
}
