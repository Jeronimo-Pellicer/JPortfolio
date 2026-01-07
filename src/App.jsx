import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout'; // Asegúrate de que se llame Layout.jsx

// Aquí corregimos la ruta para entrar en la carpeta 'portfolio'
import Projects from './Pages/Projects';
import ProjectDetail from './Pages/ProjectDetail';
import Books from './Pages/Books';
import HeroSection from './Components/portfolio/HeroSection';
import AboutSection from './Components/portfolio/AboutSection';
import ContactSection from './Components/portfolio/ContactSection';
import FAQSection from './Components/portfolio/FAQSection';
import MarqueeSection from './Components/portfolio/MarqueeSection';
import TechStackMarquee from './Components/portfolio/TechStackMarquee';

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
    <>
      {/* Si tienes estos componentes, descoméntalos */}
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <TechStackMarquee />
      <FAQSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
