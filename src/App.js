import React from "react";
import "./style.css";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Edit } from "./components/edit";
import { Delete } from "./components/delete";
import { Create } from "./components/create";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route />
          <Route path="/home" element={<Home/>} />

          <Route path="/Edit" element={<Edit/>} />
          <Route path="/delete" element={<Delete/>}/>
          <Route path="/create"  element={<Create/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;