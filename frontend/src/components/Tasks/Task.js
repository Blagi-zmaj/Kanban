import React from "react";

function Task(props) {
  const editNote = () => {
    console.log("Click edit button!");
    props.whenEdit({
      _id: props.id,
      content: props.content,
      listName: props.listName
    });
  };

  const changeStatus = (e) => {
    props.changeList({
      _id: props.id,
      content: props.content,
      listName: e.target.value
    });
    // props.updateTasks(
    //   { _id: props.id, content: props.content, listName: props.listName },
    //   { _id: props.id, content: props.content, listName: e.target.value }
    // );
  };

  return (
    <div className="task">
      <div>{props.content}</div>
      <br />
      <button
        onClick={() => {
          props.whenDelete(props.id);
        }}
      >
        Usuń
      </button>
      <button onClick={editNote}>Edytuj</button>
      <select onChange={changeStatus}>
        <option value="Status">Status</option>
        <option value="Do zrobienia">Do zrobienia</option>
        <option value="W trakcie">W trakcie</option>
        <option value="Przełożone">Przełożone</option>
        <option value="Zrobione">Zrobione</option>
      </select>
      <br />
      <br />
    </div>
  );
}

export default Task;
