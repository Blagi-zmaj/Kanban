import React, { useState, createContext, useContext, useEffect } from "react";
import axios from 'axios';
// import tasksData from "../tasks-data.json";

const TasksContext = createContext();
export const useTasks = () => useContext(TasksContext);

async function fetchNotes(){
  // const res = await axios.get('http://localhost:3001/api/lists/Zrobione/tasks/60e9917a9581153098235428');
  const res = await axios.get('http://localhost:3001/api/lists');
  const notes = res.data;
  return notes;
}

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  useEffect(()=> {

    let zadania = fetchNotes();
    zadania.then((value) => {setTasks(value)})
    console.log(zadania);
  }, []);

  const addTask = (task) => {
    const allTasks = [...tasks];
    allTasks.push(task);
    setTasks(allTasks);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task._id !== id);
    setTasks(newTasks);
  };

  const editTask = (edittedTask) => {
    const allTasks = [...tasks];
    const taskIndexToUpdate = allTasks.findIndex(
      (task) => task._id === edittedTask._id
    );
    allTasks[taskIndexToUpdate] = edittedTask;
    setTasks(allTasks);
  };

  const replaceTask = () => {};

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, editTask, replaceTask, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}
