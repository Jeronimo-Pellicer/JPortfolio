import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';

export default function AboutSection() {
    const { t, locale } = useLanguage();
    const trustTitle = t.about.whyTrustMe || '¿Por qué confiar en mí?';
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    const trusts = [
        {
            title: t.about.trust1?.title,
            description: t.about.trust1?.description,
        },
        {
            title: t.about.trust2?.title,
            description: t.about.trust2?.description,
        },
        {
            title: t.about.trust3?.title,
            description: t.about.trust3?.description,
        },
        {
            title: t.about.trust4?.title,
            description: t.about.trust4?.description,
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Faster, more responsive progress calculation
            const progress = Math.max(0, Math.min(1, (windowHeight * 0.7 - sectionTop) / (windowHeight + sectionHeight * 0.5)));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const longParagraphText = locale === 'en' ? "I design and develop data-driven user experiences that transform how businesses connect with their audiences. By combining UX/UI optimization, front-end development, and conversion-focused digital marketing strategies, I create scalable solutions that enhance engagement, improve performance, and drive measurable growth. My work is grounded in analytics, strategic thinking, and a deep understanding of user behavior, helping brands grow with purpose, precision, and long-term impact." : "Diseño y desarrollo experiencias de usuario basadas en datos que transforman cómo las empresas se conectan con sus audiencias. Al combinar optimización UX/UI, desarrollo frontend y estrategias de marketing digital enfocadas en conversión, creo soluciones escalables que mejoran el engagement, optimizan el rendimiento e impulsan el crecimiento medible. Mi trabajo se fundamenta en analítica, pensamiento estratégico y una comprensión profunda del comportamiento del usuario, ayudando a las marcas a crecer con propósito, precisión e impacto a largo plazo.";
    const words = longParagraphText.split(' ');
    // Exponential progress for faster, more dynamic reveal effect
    const expProgress = Math.pow(scrollProgress, 0.6);
    const coloredWordCount = Math.floor(words.length * expProgress);

    const renderColoredParagraph = () => {
        return words.map((word, idx) => (
            <span key={idx} className={idx < coloredWordCount ? 'text-emerald-400' : 'text-white/30'}>
                {word}{' '}
            </span>
        ));
    };

    return (
        <section id="about" className="relative pt-16 pb-24" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <div className="text-xs md:text-sm uppercase text-emerald-400 font-semibold tracking-widest">{t.about.title}</div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-6 tracking-tight leading-tight">{t.about.heading}</h1>
                        <div className="w-24 h-1.5 bg-emerald-500 mx-auto my-6 rounded"></div>
                    </div>

                    {/* Long description with scroll reveal */}
                    <div className="w-full mx-auto mb-16 px-6 md:px-12">
                        <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed text-justify">
                            {renderColoredParagraph()}
                        </p>
                    </div>

                    {/* Divider line */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-16"></div>

                    {/* Why Trust Me title */}
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold italic uppercase text-white mb-8 text-left leading-tight">
                        <span className="typing" style={{ ['--chars']: trustTitle.length, ['--duration']: `${trustTitle.length * 0.06}s` }}>{trustTitle}</span>
                    </h3>

                    <style>{`
                        .typing {
                            display: inline-block;
                            overflow: hidden;
                            white-space: nowrap;
                            border-right: 3px solid rgba(255,255,255,0.65);
                            box-sizing: border-box;
                            opacity: 0;
                            animation: fadeIn 0.4s ease forwards, typing var(--duration) linear 0.1s forwards, blink-caret .7s step-end calc(var(--duration) + 0.1s) infinite;
                        }
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(4px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes typing {
                            from { width: 0; }
                            to { width: 100%; }
                        }
                        @keyframes blink-caret {
                            from, to { border-color: transparent }
                            50% { border-color: rgba(255,255,255,0.65) }
                        }
                    `}</style>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-8">
                        {/* Left large card (trust2) */}
                        <div className="col-span-1 md:col-span-2 row-span-2 rounded-2xl overflow-hidden relative" style={{ minHeight: 320 }}>
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/trust2.jpg')` }} />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
                            <div className="relative p-8 lg:p-10 border border-white/10 bg-transparent h-full flex flex-col justify-end">
                                <h4 className="text-lg md:text-xl lg:text-2xl font-normal text-white mb-4 leading-tight">{t.about.trust2?.title}</h4>
                                <p className="text-zinc-300 leading-relaxed text-sm md:text-base text-justify">{t.about.trust2?.description}</p>
                            </div>
                        </div>

                        {/* Right top (trust3) */}
                        <div className="col-span-1 rounded-2xl overflow-hidden relative" style={{ minHeight: 150 }}>
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/trust3.jpg')` }} />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
                            <div className="relative p-6 lg:p-8 border border-white/10 bg-transparent h-full flex flex-col justify-end">
                                <h4 className="text-lg md:text-xl font-normal text-white mb-3 leading-tight">{t.about.trust3?.title}</h4>
                                <p className="text-zinc-300 text-sm leading-relaxed">{t.about.trust3?.description}</p>
                            </div>
                        </div>

                        {/* Right bottom (trust1) */}
                        <div className="col-span-1 rounded-2xl overflow-hidden relative" style={{ minHeight: 150 }}>
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/trust1.jpg')` }} />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
                            <div className="relative p-6 lg:p-8 border border-white/10 bg-transparent h-full flex flex-col justify-end">
                                <h4 className="text-lg md:text-xl font-normal text-white mb-3 leading-tight">{t.about.trust1?.title}</h4>
                                <p className="text-zinc-300 text-sm leading-relaxed">{t.about.trust1?.description}</p>
                            </div>
                        </div>

                        {/* Full-width academic card without background (trust4 / faculty) */}
                        <div className="col-span-3 mt-6 rounded-2xl p-8 lg:p-10 border border-white/10 bg-white/5">
                            <h4 className="text-lg md:text-xl lg:text-xl font-normal text-white mb-4 leading-tight">{t.about.trust4?.title}</h4>
                            <p className="text-zinc-300 leading-relaxed text-sm md:text-base text-justify">{t.about.trust4?.description}</p>
                        </div>

                        {/* CTA at the end of the section */}
                        <div className="col-span-3 mt-6 flex justify-end">
                            <a href="#contact" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full">VER MAS &gt;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
