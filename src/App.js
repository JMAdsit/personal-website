import React from "react";
import Menu from "./navigation/Menu";
import Routing from "./navigation/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
