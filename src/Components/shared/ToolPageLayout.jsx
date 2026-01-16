import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Share2, Check } from 'lucide-react';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import { createPageUrl } from '@/utils';

export default function ToolPageLayout({
  children,
  title,
  subtitle,
  description,
  icon: Icon,
  gradient = 'from-violet-600 to-purple-600',
}) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: subtitle || description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(`${title}\n${subtitle || description}\n${window.location.href}`);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Share failed:', error);
      }
    }
  };

  const navigateToContact = () => {
    navigate(createPageUrl('Home'), { state: { scrollTo: 'contact' } });
  };
  
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to={createPageUrl('Home')}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Volver</span>
              </motion.button>
            </Link>

            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-lg font-semibold text-white hidden sm:block">{title}</h1>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShare}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                title="Share this tool"
              >
                {shareSuccess ? <Check className="w-5 h-5 text-emerald-400" /> : <Share2 className="w-5 h-5" />}
              </motion.button>
              <Link to={createPageUrl('Home')}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                >
                  <Home className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br ${gradient} opacity-10 blur-[100px]`} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} items-center justify-center mb-6 shadow-lg`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{subtitle || description}</p>
          </motion.div>
        </div>
      </section>

      <main className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            {children}
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>{t.tools.pages.footer.freeToolmark}</p>
            <Link to={createPageUrl('Home')} className="text-violet-400 hover:text-violet-300 transition-colors">
              {t.tools.pages.footer.viewAllTools}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
