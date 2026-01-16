import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Target, Rocket, Lightbulb, CheckCircle2, ArrowRight, RefreshCw, Calendar } from 'lucide-react';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import ToolPageLayout from '@/Components/shared/ToolPageLayout';
import { Button } from '@/Components/ui/button';
import { Progress } from '@/Components/ui/progress';
import { createPageUrl } from '@/utils';

export default function StrategyQuiz() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const questions = t.tools.pages.strategyQuiz.questions;
  const strategyProfiles = t.tools.pages.strategyQuiz.strategyProfiles;
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const progress = Math.round((currentStep / questions.length) * 100);

  const handleAnswer = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const next = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      const counts = Object.keys(strategyProfiles).reduce((acc, key) => ({ ...acc, [key]: 0 }), {});
      Object.values(answers).forEach((opt) => {
        if (opt?.value) counts[opt.value] = (counts[opt.value] || 0) + 1;
      });
      const winningProfile = Object.keys(counts).sort((a, b) => (counts[b] || 0) - (counts[a] || 0))[0] || 'performance';
      setResult(strategyProfiles[winningProfile]);
      setShowResult(true);
    }
  };

  const prev = () => setCurrentStep((prev) => Math.max(0, prev - 1));

  const restart = () => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
    setShowResult(false);
  };

  const currentQuestion = questions[currentStep];

  return (
    <ToolPageLayout
      title={t.tools.pages.strategyQuiz.title}
      subtitle={t.tools.pages.strategyQuiz.subtitle}
      icon={Brain}
      gradient="from-indigo-600 to-purple-600"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
            <span>{t.tools.pages.strategyQuiz.step} {showResult ? questions.length : currentStep + 1} {t.tools.pages.strategyQuiz.of} {questions.length}</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-slate-800" />
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-2 text-indigo-300">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">{t.tools.pages.strategyQuiz.question} {currentStep + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{currentQuestion.text}</h3>
              <p className="text-slate-400 mb-6">{currentQuestion.description}</p>

              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(currentQuestion.id, option)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${answers[currentQuestion.id]?.id === option.id ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700 hover:bg-slate-800'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Target className="w-4 h-4 text-indigo-300" />
                        <span className="font-medium">{option.label}</span>
                      </div>
                      {answers[currentQuestion.id]?.id === option.id && <CheckCircle2 className="w-5 h-5 text-indigo-400" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6">
                <Button variant="ghost" onClick={prev} disabled={currentStep === 0} className="text-slate-300 hover:text-white">
                  {t.tools.pages.strategyQuiz.back}
                </Button>
                <Button onClick={next} disabled={!answers[currentQuestion.id]} className="bg-gradient-to-r from-indigo-600 to-purple-600">
                  {currentStep === questions.length - 1 ? t.tools.pages.strategyQuiz.viewResult : t.tools.pages.strategyQuiz.next}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3 text-indigo-300">
                <Rocket className="w-5 h-5" />
                <span className="text-sm font-medium">{t.tools.pages.strategyQuiz.yourRecommendedStrategy}</span>
              </div>
              <div className={`p-1 rounded-2xl bg-gradient-to-r ${result?.gradient}`}>
                <div className="bg-slate-950/80 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2 text-white">
                    <Lightbulb className="w-5 h-5" />
                    <h3 className="text-xl font-semibold">{result?.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-4">{result?.description}</p>
                  <div className="space-y-3">
                    {result?.actions.map((action, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <Button variant="ghost" onClick={restart} className="text-slate-300 hover:text-white">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {t.tools.pages.strategyQuiz.restartQuiz}
                </Button>
                <Button
                  onClick={() => {
                    navigate(createPageUrl('Home'), { state: { scrollTo: 'contact' } });
                  }}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.tools.pages.strategyQuiz.scheduleConsultation}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToolPageLayout>
  );
}
