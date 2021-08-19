import React, { useState, createContext, useContext, useEffect } from "react";
import axios from 'axios';
// import tasksData from "../tasks-data.json";

const TasksContext = createContext();
export const useTasks = () => useContext(TasksContext);

async function fetchNotes(){
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

  async function addTask (task) {
    const allTasks = [...tasks];

    const res = await axios.post('http://localhost:3001/api/lists', task);
    const newNote = res.data;

    allTasks.push(newNote);
    setTasks(allTasks);
  };


  async function removeTask (id) {
    const newTasks = tasks.filter((task) => task._id !== id);
    await axios.delete('http://localhost:3001/api/lists/' + id);
    setTasks(newTasks);
  };

  async function editTask (edittedTask) {
    const allTasks = [...tasks];
    const taskIndexToUpdate = allTasks.findIndex(
      (task) => task._id === edittedTask._id
    );
    await axios.put('http://localhost:3001/api/lists/' + edittedTask._id, edittedTask);
    allTasks[taskIndexToUpdate] = edittedTask;
    setTasks(allTasks);
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, editTask, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}
