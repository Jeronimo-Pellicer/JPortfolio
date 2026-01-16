import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
