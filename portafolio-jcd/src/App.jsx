import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail';

const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/proyecto/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
