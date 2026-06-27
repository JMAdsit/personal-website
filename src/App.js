import React from "react";
import Menu from "./navigation/Menu";
import Routing from "./navigation/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <div className="pageFrame">
        <BrowserRouter>
          <div className="contentFrame">
            <Menu />
            <Routing />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
