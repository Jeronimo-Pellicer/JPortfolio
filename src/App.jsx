import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './Layout'; // Asegúrate de que se llame Layout.jsx

// Lazy-load pages (route-level splitting)
const Projects = lazy(() => import('./Pages/Projects'));
const ProjectDetail = lazy(() => import('./Pages/ProjectDetail'));
const Books = lazy(() => import('./Pages/Books'));
const Herramientas = lazy(() => import('./Pages/Herramientas'));
const Resources = lazy(() => import('./Pages/Resources'));
const ROICalculator = lazy(() => import('./Pages/ROICalculator'));
const BuyerPersona = lazy(() => import('./Pages/BuyerPersona'));
const PriorityMatrix = lazy(() => import('./Pages/PriorityMatrix'));
const StrategyQuiz = lazy(() => import('./Pages/StrategyQuiz'));

// Lazy-load heavy home subcomponents
const HeroSection = lazy(() => import('./Components/portfolio/HeroSection'));
const AboutSection = lazy(() => import('./Components/portfolio/AboutSection'));
const ProjectsSection = lazy(() => import('./Components/portfolio/ProjectsSection'));
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
            <Route path="/herramientas/calculadora-roi" element={<ROICalculator />} />
            <Route path="/herramientas/buyer-persona" element={<BuyerPersona />} />
            <Route path="/herramientas/matriz-priorizacion" element={<PriorityMatrix />} />
            <Route path="/herramientas/quiz-estrategia" element={<StrategyQuiz />} />
            <Route path="/recursos" element={<Resources />} />
          </Routes>
        </Suspense>
      </Layout>
      <Toaster richColors position="top-right" />
    </BrowserRouter>
  );
}

export default App;
