import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../Components/shared/SEO';
import HeroSection from '../Components/home/HeroSection';
import ToolsSection from '../Components/home/ToolsSection';
import WhySection from '../Components/home/WhySection';
import HowItWorksSection from '../Components/home/HowItWorksSection';
import FAQSection from '../Components/home/FAQSection';
import CTASection from '../Components/home/CTASection';
import Footer from '../Components/home/Footer';

export default function Herramientas() {
    const location = useLocation();

    useEffect(() => {
        const { hash } = location;
        if (!hash) return;

        // Delay to ensure content is mounted before scrolling
        const timeout = setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 80);

        return () => clearTimeout(timeout);
    }, [location]);

    return (
        <div className="min-h-screen bg-slate-950">
            <SEO 
                title="Herramientas Gratuitas de Marketing Digital | JP Studio"
                description="Accede gratis a herramientas profesionales de marketing: calculadora ROI, generador de buyer persona y más. Sin registro, resultados medibles al instante."
                url="/herramientas"
            />
            <main>
                <HeroSection />
                <ToolsSection />
                <WhySection />
                <section id="como-funciona">
                    <HowItWorksSection />
                </section>
                <section id="faq">
                    <FAQSection />
                </section>
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
