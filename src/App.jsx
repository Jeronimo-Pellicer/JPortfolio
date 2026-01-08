import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout'; // Asegúrate de que se llame Layout.jsx

// Lazy-load pages (route-level splitting)
const Projects = lazy(() => import('./Pages/Projects'));
const ProjectDetail = lazy(() => import('./Pages/ProjectDetail'));
const Books = lazy(() => import('./Pages/Books'));
const Herramientas = lazy(() => import('./Pages/Herramientas'));
const Recursos = lazy(() => import('./Pages/Recursos'));

// Lazy-load heavy home subcomponents
const HeroSection = lazy(() => import('./Components/portfolio/HeroSection'));
const AboutSection = lazy(() => import('./Components/portfolio/AboutSection'));
const ContactSection = lazy(() => import('./Components/portfolio/ContactSection'));
const FAQSection = lazy(() => import('./Components/portfolio/FAQSection'));
const MarqueeSection = lazy(() => import('./Components/portfolio/MarqueeSection'));

function HomeContent() {
  const location = useLocation();

  useEffect(() => {
    // Manejar hash en la URL (ej: /#contact)
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/books" element={<Books />} />
            <Route path="/herramientas" element={<Herramientas />} />
            <Route path="/recursos" element={<Recursos />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
