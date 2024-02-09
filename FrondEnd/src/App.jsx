import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routers";

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export default App;
