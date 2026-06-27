import React from "react";
import Menu from "./navigation/Menu";
import Routing from "./navigation/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="pageFrame m-auto">
        <Menu />
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
