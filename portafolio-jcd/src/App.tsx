import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import { usePauseOffscreenAnimations } from './hooks/usePauseOffscreenAnimations';

// Lazy-load secondary pages to reduce initial bundle
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const CvPage = React.lazy(() => import('./pages/CvPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const LandingPage = () => {
  usePauseOffscreenAnimations();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/proyecto/:id" element={<ProjectDetail />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ScrollToTop />
      <Analytics />
    </div>
  );
}

export default App;

