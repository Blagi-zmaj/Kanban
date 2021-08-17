import React from "react";
import { useState } from "react";
import { useTasks } from "./TaskProvider";
import List from "./List";
import "../App.css";

export default function Lists() {
  const [lists, setLists] = useState([
    "Do zrobienia",
    "W trakcie",
    "Przełożone",
    "Zrobione"
  ]);

  return (
    <div className="listBox">
      {lists.map((list, index) => (
        <List key={index} listName={list} />
      ))}
    </div>
  );
}
