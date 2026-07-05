import React from "react";
import Menu from "./navigation/Menu";
import Routing from "./navigation/Routing";
import Footer from "./navigation/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <div className="pageFrame">
        <BrowserRouter>
          <div className="contentFrame">
            <Menu />
            <Routing />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
