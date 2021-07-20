import React, { useState } from "react";

function NewTask(props) {
  const [showModal, setShowModal] = useState(false);
  const [newContent, setContent] = useState("");
  const [newListName, setListName] = useState(props.listName);

  const contentChange = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    setContent(inputValue);
  };

  const listNameChange = (e) => {
    const listNameValue = e.target.value;
    console.log(listNameValue);
    setListName(listNameValue);
  };

  const changeModal = () => {
    setShowModal(!showModal);
  };

  const addTask = () => {
    const newTask = {
      content: newContent,
      listName: newListName
    };
    props.onAdd(newTask);
    // console.log(newTask.content, newTask.listName);
    // setContent("");
    // setListName("");
    setShowModal(!showModal);
  };

  return showModal ? (
    <div className="newTask">
      <form>
        <label htmlFor="content"></label>
        <input
          onChange={contentChange}
          value={newContent}
          id="content"
          type="text"
          required
          autoComplete="off"
        ></input>
        <label htmlFor="list"></label>
        <input
          onChange={listNameChange}
          value={newListName}
          id="list"
          type="text"
          required
          autoComplete="off"
        ></input>
        <button onClick={changeModal}>Anuluj</button>
        {/* <button onClick={addTask}>Dodaj</button> */}
        <button onClick={addTask} type="submit" value="Dodaj">
          Dodaj
        </button>
        {/* <h2>{`${content} ${listName}`}</h2> */}
      </form>
    </div>
  ) : (
    <button
      onClick={() => {
        setShowModal(!showModal);
      }}
    >
      Dodaj zadanie
    </button>
  );
}

export default NewTask;
