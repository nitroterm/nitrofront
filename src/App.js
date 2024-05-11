import React from 'react';
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import OnboardingPage from './OnboardingPage';
import Parametre from './Parametre';
import CreatePost from './CreatePost';
import PostPage from "./PostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/onboarding'} element={<OnboardingPage />} />
        <Route path={'/parametre'} element={<Parametre />} />
        <Route path={'/write'} element={<CreatePost />} />
        <Route path={'/post'} element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;