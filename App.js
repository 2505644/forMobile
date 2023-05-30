import React  from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectIdPage from "./pages/ProjectIdPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/projects' element={<Projects />} />
      <Route exact path='/project/:id' element={<ProjectIdPage />} />
      <Route path='/' element={<Navigate to="/projects" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
