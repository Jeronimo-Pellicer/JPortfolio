import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
// Asegúrate de que las rutas coincidan con donde moviste tus archivos
import Projects from './Pages/Projects'; 
// NOTA: Como Home.txt tenía el código de Layout, necesitas crear un Home real.
// Por ahora usaremos HeroSection como Home si lo tienes, o un div simple.
import HeroSection from './Components/HeroSection'; 
import AboutSection from './Components/AboutSection';
import ContactSection from './Components/ContactSection';
import FAQSection from './Components/FAQSection';

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
