import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Asegúrate de que se llame Layout.jsx

// Aquí corregimos la ruta para entrar en la carpeta 'portfolio'
import Projects from './Pages/Projects';
import HeroSection from './Components/portfolio/HeroSection';
import AboutSection from './Components/portfolio/AboutSection';
import ContactSection from './Components/portfolio/ContactSection';
import FAQSection from './Components/portfolio/FAQSection';

function Home() {
  return (
    <>
      {/* Si tienes estos componentes, descoméntalos */}
      <HeroSection />
      <AboutSection />
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
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
