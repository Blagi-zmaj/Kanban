import React, { useState } from "react";
import { useTasks } from "./TaskProvider";

export default function NewTask(props) {
  const { addTask } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("");
  const [listName, setListName] = useState(props.listName);

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
    setContent("");
  };

  const addNewTask = (e) => {
    e.preventDefault();
    const task = {
      _id: Math.floor(Math.random() * 1000000),
      content: content,
      listName: listName
    };
    setContent("");
    setShowModal(!showModal);
    addTask(task);
  };

  return showModal ? (
    <div className="newTask">
      <form>
        <label htmlFor="content"></label>
        <input
          onChange={contentChange}
          value={content}
          id="content"
          type="text"
          required
          autoComplete="off"
        ></input>
        <label htmlFor="list"></label>
        <input
          onChange={listNameChange}
          value={listName}
          id="list"
          type="text"
          required
          autoComplete="off"
        ></input>
        <button onClick={changeModal}>Anuluj</button>
        <button type="submit" value="Dodaj" onClick={addNewTask}>
          Dodaj
        </button>
      </form>
    </div>
  ) : (
    <button onClick={changeModal}>Dodaj zadanie</button>
  );
}
