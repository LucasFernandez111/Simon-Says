import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import SimonSays from "../components/SimonSays";
import Login from "../pages/Login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/simonsays" element={<SimonSays />} />
    </Routes>
  );
};

export default Routers;
