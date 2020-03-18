import React from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

import "./app.css";

const App = () => {
  const todoData = [
    { label: "Gerti kava", important: false, id: 1 },
    { label: "Kurti programa", important: true, id: 2 },
    { label: "Dar ką nors", important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={2} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} onDeleted={id => console.log("del", id)} />
    </div>
  );
};

export default App;
