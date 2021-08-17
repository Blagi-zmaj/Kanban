import React, { useState } from "react";
import { useTasks } from "./TaskProvider";
import Task from "./Task";
import NewTask from "./NewTask";
import EditTask from "./EditTask";

export default function List({ listName }) {
  const { tasks } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const [editTaskObj, setEditTaskObj] = useState();
  const [showEditModal, setShowEditModal] = useState(false);

  const editTask = (task) => {
    setShowEditModal(!showEditModal);
    console.log(task.content);
    setEditTaskObj(task);
  };

  return (
    <>
      <div className="listElement">
        <h2 style={{ color: "red" }}>{listName}</h2>
        <h3>
          {showModal ? null : <NewTask listName={listName} />}
          {showEditModal ? (
            <EditTask
              doShowModal={(isShow) => setShowEditModal(isShow)}
              {...editTaskObj}
            />
          ) : null}

          <br />
          <br />
          {tasks.map((task, index) =>
            task.listName === listName ? (
              <Task key={index} {...task} edit={(task) => editTask(task)} />
            ) : null
          )}
        </h3>
      </div>
    </>
  );
}
