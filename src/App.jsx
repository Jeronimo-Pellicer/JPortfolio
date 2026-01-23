import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import ResourceHints from './Components/shared/ResourceHints';

// Defer non-critical toast notifications
const Toaster = lazy(() => import('sonner').then(module => ({ default: module.Toaster })));

// Lazy-load pages (route-level splitting)
const Projects = lazy(() => import(/* webpackChunkName: "projects" */ './Pages/Projects'));
const ProjectDetail = lazy(() => import(/* webpackChunkName: "project-detail" */ './Pages/ProjectDetail'));
const Books = lazy(() => import(/* webpackChunkName: "books" */ './Pages/Books'));
const Herramientas = lazy(() => import(/* webpackChunkName: "herramientas" */ './Pages/Herramientas'));
const Resources = lazy(() => import(/* webpackChunkName: "resources" */ './Pages/Resources'));
const ROICalculator = lazy(() => import(/* webpackChunkName: "roi-calculator" */ './Pages/ROICalculator'));
const BuyerPersona = lazy(() => import(/* webpackChunkName: "buyer-persona" */ './Pages/BuyerPersona'));
const PriorityMatrix = lazy(() => import(/* webpackChunkName: "priority-matrix" */ './Pages/PriorityMatrix'));
const StrategyQuiz = lazy(() => import(/* webpackChunkName: "strategy-quiz" */ './Pages/StrategyQuiz'));

// Critical above-the-fold component - load immediately
const HeroSection = lazy(() => import(/* webpackChunkName: "hero", webpackPrefetch: true */ './Components/portfolio/HeroSection'));
const MarqueeSection = lazy(() => import(/* webpackChunkName: "marquee", webpackPrefetch: true */ './Components/portfolio/MarqueeSection'));

// Below-the-fold components - defer loading
const AboutSection = lazy(() => import(/* webpackChunkName: "about" */ './Components/portfolio/AboutSection'));
const FAQSection = lazy(() => import(/* webpackChunkName: "faq" */ './Components/portfolio/FAQSection'));
const ContactSection = lazy(() => import(/* webpackChunkName: "contact" */ './Components/portfolio/ContactSection'));

// Lightweight loading skeleton
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-zinc-950">
    <div className="text-white">Cargando...</div>
  </div>
);

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
    <Suspense fallback={<LoadingFallback />}>
      <HeroSection />
      <MarqueeSection />
      <Suspense fallback={null}>
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </Suspense>
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ResourceHints />
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
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
      <Suspense fallback={null}>
        <Toaster richColors position="top-right" />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
