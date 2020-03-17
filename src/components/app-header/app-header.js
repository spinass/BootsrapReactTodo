import React from "react";

import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Darbai</h1>
      <h2>
        {toDo} dar padaryti, {done} atlikta
      </h2>
    </div>
  );
};

export default AppHeader;
