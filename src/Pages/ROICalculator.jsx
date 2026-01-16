import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator, TrendingUp, DollarSign, Target, Users, BarChart3,
  ArrowUpRight, ArrowDownRight, Info, Lightbulb,
} from 'lucide-react';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import ToolPageLayout from '@/Components/shared/ToolPageLayout';
import { Slider } from '@/Components/ui/slider';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';

export default function ROICalculator() {
  const { t, language } = useLanguage();
  const [investment, setInvestment] = useState(5000);
  const [revenue, setRevenue] = useState(15000);
  const [conversions, setConversions] = useState(50);
  const [clicks, setClicks] = useState(2000);

  const metrics = useMemo(() => {
    const roi = investment > 0 ? ((revenue - investment) / investment) * 100 : 0;
    const cpa = conversions > 0 ? investment / conversions : 0;
    const conversionRate = clicks > 0 ? (conversions / clicks) * 100 : 0;
    const cpc = clicks > 0 ? investment / clicks : 0;
    const revenuePerConversion = conversions > 0 ? revenue / conversions : 0;
    const profit = revenue - investment;

    return {
      roi: roi.toFixed(1),
      cpa: cpa.toFixed(2),
      conversionRate: conversionRate.toFixed(2),
      cpc: cpc.toFixed(2),
      revenuePerConversion: revenuePerConversion.toFixed(2),
      profit,
      isPositive: roi > 0,
    };
  }, [investment, revenue, conversions, clicks]);

  const projections = useMemo(() => [
    { period: t.tools.pages.roiCalculator.months3, value: metrics.profit * 3, months: 3 },
    { period: t.tools.pages.roiCalculator.months6, value: metrics.profit * 6, months: 6 },
    { period: t.tools.pages.roiCalculator.months12, value: metrics.profit * 12, months: 12 },
  ], [metrics.profit, t]);

  const getInsight = () => {
    const roi = parseFloat(metrics.roi);
    if (roi >= 200) return { text: t.tools.pages.roiCalculator.insights.excellent, type: 'success' };
    if (roi >= 100) return { text: t.tools.pages.roiCalculator.insights.good, type: 'success' };
    if (roi >= 50) return { text: t.tools.pages.roiCalculator.insights.acceptable, type: 'warning' };
    if (roi >= 0) return { text: t.tools.pages.roiCalculator.insights.low, type: 'warning' };
    return { text: t.tools.pages.roiCalculator.insights.negative, type: 'error' };
  };

  const insight = getInsight();

  return (
    <ToolPageLayout
      title={t.tools.roi.title}
      subtitle={t.tools.roi.subtitle}
      icon={Calculator}
      gradient="from-violet-600 to-purple-600"
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-violet-400" />
              {t.tools.pages.roiCalculator.campaignData}
            </h3>
            <div className="space-y-8">
              <InputSlider label={t.tools.pages.roiCalculator.totalInvestment} value={investment} onChange={setInvestment} min={100} max={100000} step={100} prefix="$" icon={DollarSign} tooltip={t.tools.pages.roiCalculator.tooltips.investment} />
              <InputSlider label={t.tools.pages.roiCalculator.generatedRevenue} value={revenue} onChange={setRevenue} min={0} max={500000} step={100} prefix="$" icon={TrendingUp} tooltip={t.tools.pages.roiCalculator.tooltips.revenue} />
              <InputSlider label={t.tools.pages.roiCalculator.conversions} value={conversions} onChange={setConversions} min={0} max={1000} step={1} icon={Target} tooltip={t.tools.pages.roiCalculator.tooltips.conversions} />
              <InputSlider label={t.tools.pages.roiCalculator.totalClicks} value={clicks} onChange={setClicks} min={0} max={50000} step={10} icon={Users} tooltip={t.tools.pages.roiCalculator.tooltips.clicks} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className={`rounded-2xl border p-4 ${insight.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30' : insight.type === 'warning' ? 'bg-amber-500/10 border-amber-500/30' : 'bg-rose-500/10 border-rose-500/30'}`}
          >
            <div className="flex items-start gap-3">
              <Lightbulb
                className={`w-5 h-5 shrink-0 ${insight.type === 'success' ? 'text-emerald-400' : insight.type === 'warning' ? 'text-amber-400' : 'text-rose-400'}`}
              />
              <p className="text-sm text-slate-300">{insight.text}</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-8 ${metrics.isPositive ? 'bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30' : 'bg-gradient-to-br from-rose-600/20 to-red-600/20 border border-rose-500/30'}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl ${metrics.isPositive ? 'bg-emerald-500/20' : 'bg-rose-500/20'} flex items-center justify-center`}>
                  {metrics.isPositive ? <ArrowUpRight className="w-6 h-6 text-emerald-400" /> : <ArrowDownRight className="w-6 h-6 text-rose-400" />}
                </div>
                <div>
                  <p className="text-sm text-slate-400">{t.tools.pages.roiCalculator.returnOnInvestment}</p>
                  <p className={`text-sm font-medium ${metrics.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {metrics.isPositive ? t.tools.pages.roiCalculator.profitableCampaign : t.tools.pages.roiCalculator.unprofitableCampaign}
                  </p>
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={metrics.roi}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`text-6xl sm:text-7xl font-bold ${metrics.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}
              >
                {metrics.roi}%
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{t.tools.pages.roiCalculator.profitLoss}</span>
                <span className={`text-2xl font-bold ${metrics.profit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  ${metrics.profit.toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <MetricCard label={t.tools.pages.roiCalculator.cpa} value={`$${metrics.cpa}`} description={t.tools.pages.roiCalculator.cpaDescription} icon={Target} delay={0.1} />
            <MetricCard label={t.tools.pages.roiCalculator.conversionRate} value={`${metrics.conversionRate}%`} description={t.tools.pages.roiCalculator.conversionRateDescription} icon={TrendingUp} delay={0.15} />
            <MetricCard label={t.tools.pages.roiCalculator.cpc} value={`$${metrics.cpc}`} description={t.tools.pages.roiCalculator.cpcDescription} icon={DollarSign} delay={0.2} />
            <MetricCard label={t.tools.pages.roiCalculator.valuePerConversion} value={`$${metrics.revenuePerConversion}`} description={t.tools.pages.roiCalculator.valuePerConversionDescription} icon={BarChart3} delay={0.25} />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">{t.tools.pages.roiCalculator.profitProjections}</h3>
            <div className="space-y-4">
              {projections.map((proj, index) => (
                <motion.div
                  key={proj.period}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
                >
                  <span className="text-slate-400">{proj.period}</span>
                  <span className={`text-xl font-bold font-mono ${proj.value >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    ${proj.value.toLocaleString()}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-12 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8">
        <h3 className="text-xl font-semibold text-white mb-6">{t.tools.pages.roiCalculator.howToInterpret}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EducationCard title={t.tools.pages.roiCalculator.roiTitle} description={t.tools.pages.roiCalculator.roiDesc} />
          <EducationCard title={t.tools.pages.roiCalculator.cpaTitle} description={t.tools.pages.roiCalculator.cpaDesc} />
          <EducationCard title={t.tools.pages.roiCalculator.conversionRateTitle} description={t.tools.pages.roiCalculator.conversionRateDesc} />
          <EducationCard title={t.tools.pages.roiCalculator.cpcTitle} description={t.tools.pages.roiCalculator.cpcDesc} />
        </div>
      </motion.div>
    </ToolPageLayout>
  );
}

function InputSlider({ label, value, onChange, min, max, step, prefix = '$', icon: Icon, tooltip }) {
  const [inputValue, setInputValue] = React.useState(value.toString());

  React.useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, '');
    setInputValue(rawValue);
    if (rawValue === '') return;
    const numValue = parseInt(rawValue, 10);
    if (!isNaN(numValue)) {
      onChange(Math.min(Math.max(numValue, min), max));
    }
  };

  const handleBlur = () => {
    if (inputValue === '' || isNaN(parseInt(inputValue, 10))) {
      setInputValue(value.toString());
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-violet-400" />
          <Label className="text-slate-300">{label}</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-3.5 h-3.5 text-slate-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center gap-1">
          {prefix && <span className="text-xl font-bold text-white">{prefix}</span>}
          <Input
            type="text"
            inputMode="numeric"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="w-28 text-right text-xl font-bold text-white bg-slate-800/50 border-slate-700 rounded-lg px-3 py-1 h-auto focus-visible:ring-1 focus-visible:ring-violet-500"
          />
        </div>
      </div>
      <Slider value={[value]} onValueChange={(v) => onChange(v[0])} min={min} max={max} step={step} className="py-2" />
      <div className="flex justify-between text-xs text-slate-500">
        <span>{prefix}{min.toLocaleString()}</span>
        <span>{prefix}{max.toLocaleString()}</span>
      </div>
    </div>
  );
}

function MetricCard({ label, value, description, icon: Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 p-5 hover:border-violet-500/50 transition-colors"
    >
      <Icon className="w-5 h-5 text-violet-400 mb-3" />
      <p className="text-sm text-slate-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-slate-500">{description}</p>
    </motion.div>
  );
}

function EducationCard({ title, description }) {
  return (
    <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
      <h4 className="font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
