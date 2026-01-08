import React from 'react';
import { useLanguage } from './LanguageContext';

export default function AboutSection() {
    const { t } = useLanguage();
    const trustTitle = t.about.whyTrustMe || '¿Por qué confiar en mí?';

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

    return (
        <section id="about" className="relative pt-16 pb-24">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold italic uppercase text-white mb-6 text-left">
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
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/assets/trust2.png')` }} />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
                            <div className="relative p-8 lg:p-10 border border-white/10 bg-transparent h-full flex flex-col justify-end">
                                <h4 className="text-lg md:text-xl lg:text-2xl font-normal text-white mb-4 leading-tight">{t.about.trust2?.title}</h4>
                                <p className="text-zinc-300 leading-relaxed text-sm md:text-base text-justify">{t.about.trust2?.description}</p>
                            </div>
                        </div>

                        {/* Right top (trust3) */}
                        <div className="col-span-1 rounded-2xl overflow-hidden relative" style={{ minHeight: 150 }}>
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/assets/trust3.png')` }} />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
                            <div className="relative p-6 lg:p-8 border border-white/10 bg-transparent h-full flex flex-col justify-end">
                                <h4 className="text-lg md:text-xl font-normal text-white mb-3 leading-tight">{t.about.trust3?.title}</h4>
                                <p className="text-zinc-300 text-sm leading-relaxed">{t.about.trust3?.description}</p>
                            </div>
                        </div>

                        {/* Right bottom (trust1) */}
                        <div className="col-span-1 rounded-2xl overflow-hidden relative" style={{ minHeight: 150 }}>
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/assets/trust1.png')` }} />
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
