
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HomeScreen from "./screens/home";
import ProjectsScreen from "./screens/projects";
import './styles/app.scss'



function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path='/' element={<HomeScreen />} />
      <Route exact path='/projetos' element={<ProjectsScreen />} />
      <Route exact path='*' element={<HomeScreen />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
