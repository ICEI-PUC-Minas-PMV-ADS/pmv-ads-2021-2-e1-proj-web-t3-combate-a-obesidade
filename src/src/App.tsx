import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Restaurantes from './pages/Restaurantes'
import Nutricionistas from './pages/Nutricionistas'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="restaurantes" element={<Restaurantes />} />
            <Route path="nutricionistas" element={<Nutricionistas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
