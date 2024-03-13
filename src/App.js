import React from 'react';
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;