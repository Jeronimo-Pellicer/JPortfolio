import React, { useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import DecryptedText from './DecryptedText';
import ScrollReveal from './ScrollReveal';

const AboutSection = React.memo(() => {
    const { t, locale } = useLanguage();
    const trustTitle = t.about.whyTrustMe || '¿Por qué confiar en mí?';

    const longParagraphText = useMemo(() => 
        locale === 'en' 
            ? "I design and develop data-driven user experiences that transform how businesses connect with their audiences. By combining UX/UI optimization, front-end development, and conversion-focused digital marketing strategies, I create scalable solutions that enhance engagement, improve performance, and drive measurable growth. My work is grounded in analytics, strategic thinking, and a deep understanding of user behavior, helping brands grow with purpose, precision, and long-term impact." 
            : "Diseño y desarrollo experiencias de usuario basadas en datos que transforman cómo las empresas se conectan con sus audiencias. Al combinar optimización UX/UI, desarrollo frontend y estrategias de marketing digital enfocadas en conversión, creo soluciones escalables que mejoran el engagement, optimizan el rendimiento e impulsan el crecimiento medible. Mi trabajo se fundamenta en analítica, pensamiento estratégico y una comprensión profunda del comportamiento del usuario, ayudando a las marcas a crecer con propósito, precisión e impacto a largo plazo.",
        [locale]
    );

    return (
        <section id="about" className="relative pt-12 pb-6">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <div className="text-xs md:text-sm uppercase text-emerald-400 font-semibold tracking-widest">{t.about.title}</div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">{t.about.heading}</h1>
                        <div className="w-24 h-1.5 bg-emerald-500 mx-auto my-4 rounded"></div>
                    </div>

                    {/* Long description with scroll reveal */}
                    <div className="w-full mx-auto mb-8 md:mb-10 px-4 md:px-12">
                        <ScrollReveal 
                            enableBlur={true}
                            baseOpacity={0.15}
                            baseRotation={1}
                            blurStrength={2}
                            containerClassName=""
                            textClassName="text-[26px] md:text-[38px] lg:text-[53px] font-bold leading-snug md:leading-relaxed text-emerald-400"
                            rotationEnd="bottom bottom"
                            wordAnimationEnd="bottom bottom"
                        >
                            {longParagraphText}
                        </ScrollReveal>
                    </div>

                    {/* Divider line */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-16"></div>

                    {/* Why Trust Me title with decrypted effect */}
                    <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold italic uppercase text-white mb-4 md:mb-6 text-left leading-tight pt-2 md:pt-4 pl-2 pb-2 md:pl-3 md:pb-3" style={{ contain: 'layout style paint' }}>
                        <DecryptedText 
                            key={trustTitle}
                            text={trustTitle}
                            speed={50}
                            maxIterations={12}
                            sequential={true}
                            revealDirection="start"
                            animateOn="view"
                            className="text-white"
                            encryptedClassName="text-emerald-400/60"
                        />
                    </h3>

                    {/* Trust cards - Minimalista layout */}
                    <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 mt-8">
                        {/* Card 1 - Excelencia académica */}
                        <div className="p-4 md:p-8 rounded-lg md:rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 backdrop-blur-sm hover:border-emerald-500/50 transition-colors duration-300">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                                <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-center">
                                    <svg className="w-5 h-5 md:w-7 md:h-7 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm md:text-lg lg:text-xl font-bold text-white mb-1 md:mb-2">{t.about.trust1?.title}</h4>
                                    <p className="text-zinc-400 leading-relaxed text-xs md:text-sm lg:text-base">{t.about.trust1?.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Innovación */}
                        <div className="p-4 md:p-8 rounded-lg md:rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 backdrop-blur-sm hover:border-emerald-500/50 transition-colors duration-300">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                                <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-center">
                                    <svg className="w-5 h-5 md:w-7 md:h-7 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm md:text-lg lg:text-xl font-bold text-white mb-1 md:mb-2">{t.about.trust3?.title}</h4>
                                    <p className="text-zinc-400 leading-relaxed text-xs md:text-sm lg:text-base">{t.about.trust3?.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Certificación */}
                        <div className="p-4 md:p-8 rounded-lg md:rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 backdrop-blur-sm hover:border-emerald-500/50 transition-colors duration-300">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                                <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-center">
                                    <svg className="w-5 h-5 md:w-7 md:h-7 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm md:text-lg lg:text-xl font-bold text-white mb-1 md:mb-2">{t.about.trust2?.title}</h4>
                                    <p className="text-zinc-400 leading-relaxed text-xs md:text-sm lg:text-base">{t.about.trust2?.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full-width academic card */}
                    <div className="mt-6 md:mt-8 p-4 md:p-8 rounded-lg md:rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 backdrop-blur-sm hover:border-emerald-500/50 transition-colors duration-300">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                            <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-center">
                                <svg className="w-5 h-5 md:w-7 md:h-7 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm md:text-lg lg:text-xl font-bold text-white mb-1 md:mb-2">{t.about.trust4?.title}</h4>
                                <p className="text-zinc-400 leading-relaxed text-xs md:text-sm lg:text-base">{t.about.trust4?.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA at the end of the section */}
                    <div className="mt-10 flex justify-center md:justify-end">
                        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-lg cursor-pointer transition-all duration-300">
                            <span>VER MÁS</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
