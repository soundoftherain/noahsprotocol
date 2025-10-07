import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Universe from "./pages/Universe";
import MeetTheFounder from "./pages/MeetTheFounder";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/universe" element={<Universe />} />
      <Route path="/founder" element={<MeetTheFounder />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
