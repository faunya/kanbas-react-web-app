import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Labs from "./Labs";


function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>

    </HashRouter>
  );
}

export default App;
