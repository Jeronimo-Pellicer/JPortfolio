import React from 'react';
import { useLanguage } from './LanguageContext';

const techStack = [
    { name: 'Power BI', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/e5c3b36f9_Microsoft-Power-BI-Logo.png', category: 'Data Viz' },
    { name: 'Google Sheets', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/83a9eaacb_Google_Sheets_2020_Logosvg.png', category: 'Advanced/Scripting' },
    { name: 'MySQL', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/364cf34d1_ECX-1909_Hero_MySQL_600x4002x-1.png', category: 'Database' },
    { name: 'Python', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/90f86dd10_Python-logo-notextsvg.png', category: 'Analysis' },
    { name: 'Figma', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/8cf991ead_figma-logo-icon-figma-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.png', category: 'UI Design' },
    { name: 'Adobe Photoshop', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/68a664dee_adobe-photoshop-logo-transparent-background-free-png.png', category: 'Creative' },
    { name: 'Adobe Illustrator', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/c9878fa4d_Screenshot_2026-01-02_104533-removebg-preview.png', category: 'Vector Graphics' },
    { name: 'Google Analytics', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/86e34507d_Google-Analytics-logo-01.png', category: 'Analytics' },
    { name: 'Meta Ads', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/896d3fa21_Meta-Logo.png', category: 'Advertising' },
    { name: 'HubSpot', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/64d856549_HubSpot_Logo.png', category: 'CRM' },
    { name: 'Slack', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/e04c8e980_Slack_icon_2019svg.png', category: 'Communication' },
    { name: 'Notion', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/7e520ddbc_Notion_app_logo.png', category: 'Productivity' },
];

export default function MarqueeSection() {
    const { t } = useLanguage();
    // Duplicate the array to create seamless loop (less repeats on mobile)
    const duplicatedStack = [...techStack, ...techStack];

    return (
        <section className="py-3 md:py-6 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border-y border-zinc-800/50 overflow-hidden min-h-[60px] md:min-h-[100px]" style={{ contain: 'layout paint' }}>
            <div className="mb-2 md:mb-3 text-center px-4">
                <h3 className="text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-wide hover:text-emerald-400 transition-colors duration-300 cursor-default">
                    {t.marquee.toolsTechnologies}
                </h3>
            </div>
            
            <div className="relative overflow-hidden">
                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-${techStack.length * 176}px)); }
                    }
                    @media (max-width: 768px) {
                        @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(calc(-${techStack.length * 120}px)); }
                        }
                    }
                    .marquee-container {
                        display: flex;
                        gap: 24px;
                        animation: marquee 40s linear infinite;
                        will-change: transform;
                    }
                    @media (max-width: 768px) {
                        .marquee-container {
                            gap: 16px;
                        }
                    }
                    .marquee-container:hover {
                        animation-play-state: paused;
                    }
                `}</style>
                <div className="marquee-container">
                    {duplicatedStack.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className="flex-shrink-0 w-32 md:w-44 flex flex-col items-center justify-center gap-2 md:gap-3 cursor-pointer group relative"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center group-hover:border-emerald-400/50 group-hover:bg-zinc-800 transition-all duration-300 p-2 md:p-3 overflow-visible" style={{ aspectRatio: '1/1' }}>
                                <img 
                                    src={tech.logo} 
                                    alt={tech.name}
                                    width="80"
                                    height="80"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                                    style={{ aspectRatio: '1/1' }}
                                />
                            </div>
                            <div className="text-center w-full">
                                <p className="text-[10px] md:text-xs font-medium text-white whitespace-nowrap">{tech.name}</p>
                                <p className="hidden md:block text-[9px] text-zinc-500 whitespace-nowrap">{tech.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
