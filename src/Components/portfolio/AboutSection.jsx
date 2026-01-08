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
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 text-left">
                        <span className="typing" style={{ ['--chars']: trustTitle.length, ['--duration']: `${trustTitle.length * 0.08}s` }}>{trustTitle}</span>
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

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-8">
                        {trusts.map((item, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-white/10 bg-white/5 overflow-hidden"
                            >
                                <h4 className="text-lg md:text-xl lg:text-xl font-normal text-white mb-4 leading-tight">
                                    {item.title}
                                </h4>
                                <p className="text-zinc-300 leading-relaxed text-sm md:text-base text-justify">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
