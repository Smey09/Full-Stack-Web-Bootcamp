// App.js or similar file
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MainApp from "../Page/MainApp";
import TodoPage from "../Page/NewAppTodo";
import MainApp from "../Page/MainApp";

const RouteAppPage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/todoApp_v1" element={<TodoPage />} />
      </Routes>
    </Router>
  );
};

export default RouteAppPage;
