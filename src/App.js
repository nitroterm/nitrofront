import React from 'react';
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import OnboardingPage from './OnboardingPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/onboarding'} element={<OnboardingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;