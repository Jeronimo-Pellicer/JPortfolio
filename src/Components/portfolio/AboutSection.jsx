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
                    <div className="w-full mx-auto mb-10 px-6 md:px-12">
                        <ScrollReveal 
                            enableBlur={true}
                            baseOpacity={0.15}
                            baseRotation={2}
                            blurStrength={3}
                            containerClassName=""
                            textClassName="text-[27px] md:text-[43px] lg:text-[53px] font-bold leading-relaxed text-emerald-400"
                            rotationEnd="bottom bottom"
                            wordAnimationEnd="bottom bottom"
                        >
                            {longParagraphText}
                        </ScrollReveal>
                    </div>

                    {/* Divider line */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-16"></div>

                    {/* Why Trust Me title with decrypted effect */}
                    <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold italic uppercase text-white mb-4 md:mb-6 text-left leading-tight">
                        <DecryptedText 
                            key={trustTitle}
                            text={trustTitle}
                            speed={40}
                            maxIterations={15}
                            sequential={true}
                            revealDirection="start"
                            animateOn="view"
                            className="text-white"
                            encryptedClassName="text-emerald-400/60"
                        />
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-6">
                        {/* Left large card (trust2 - Innovación de vanguardia) */}
                        <div className="col-span-1 md:col-span-2 md:row-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[350px] sm:min-h-[320px] md:min-h-[380px]">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/trust2.jpg')` }} />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" />
                            <div className="relative p-5 sm:p-6 md:p-8 lg:p-10 border border-white/10 bg-transparent h-full flex flex-col justify-end">
                                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 leading-snug">{t.about.trust1?.title}</h4>
                                <p className="text-zinc-200 leading-relaxed text-xs sm:text-sm md:text-base line-clamp-4 md:line-clamp-none">{t.about.trust1?.description}</p>
                            </div>
                        </div>

                        {/* Right top (trust3) */}
                        <div className="col-span-1 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[300px] sm:min-h-[280px] md:min-h-[180px]">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/trust3.jpg')` }} />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" />
                            <div className="relative p-5 sm:p-6 lg:p-8 border border-white/10 bg-transparent h-full flex flex-col justify-end">
                                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 leading-snug">{t.about.trust3?.title}</h4>
                                <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">{t.about.trust3?.description}</p>
                            </div>
                        </div>

                        {/* Right bottom (trust1 - texto de Certificación) */}
                        <div className="col-span-1 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[300px] sm:min-h-[280px] md:min-h-[180px]">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/trust1.jpg')` }} />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" />
                            <div className="relative p-5 sm:p-6 lg:p-8 border border-white/10 bg-transparent h-full flex flex-col justify-end">
                                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 leading-snug">{t.about.trust2?.title}</h4>
                                <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">{t.about.trust2?.description}</p>
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
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
