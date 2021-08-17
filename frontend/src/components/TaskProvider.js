import React, { useState, createContext, useContext } from "react";
import tasksData from "../tasks-data.json";

const TasksContext = createContext();
export const useTasks = () => useContext(TasksContext);

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(tasksData);

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
