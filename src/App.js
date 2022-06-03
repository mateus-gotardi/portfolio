import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ContactScreen from "./screens/contact";
import HomeScreen from "./screens/home";
import ProjectsScreen from "./screens/projects";
import './styles/app.scss'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path='/' element={<HomeScreen />} />
      <Route exact path='/contato' element={<ContactScreen />} />
      <Route exact path='/projetos' element={<ProjectsScreen />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
