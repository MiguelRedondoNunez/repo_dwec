import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import LandingPage from './LandingPage';
import ExperiencePage from './ExperiencePage';

const App = () => (
  <Router>
    <MyHeader />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <MyFooter />
  </Router>
);

export default App;
