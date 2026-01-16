import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Download, Plus, Trash2, User, Briefcase, Heart, Target,
  AlertCircle, MapPin, GraduationCap, DollarSign, MessageCircle,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import ToolPageLayout from '@/Components/shared/ToolPageLayout';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { Button } from '@/Components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';

const emptyPersona = {
  name: '',
  age: '',
  gender: '',
  occupation: '',
  income: '',
  education: '',
  location: '',
  bio: '',
  goals: [''],
  painPoints: [''],
  motivations: [''],
  channels: [],
};

const channelOptions = [
  { id: 'instagram', label: 'Instagram', icon: '📸' },
  { id: 'facebook', label: 'Facebook', icon: '👥' },
  { id: 'linkedin', label: 'LinkedIn', icon: '💼' },
  { id: 'tiktok', label: 'TikTok', icon: '🎵' },
  { id: 'twitter', label: 'Twitter/X', icon: '🐦' },
  { id: 'youtube', label: 'YouTube', icon: '▶️' },
  { id: 'email', label: 'Email', icon: '📧' },
  { id: 'google', label: 'Google', icon: '🔍' },
];

export default function BuyerPersona() {
  const { t } = useLanguage();
  const [persona, setPersona] = useState(emptyPersona);
  const [activeTab, setActiveTab] = useState('info');

  const updateField = (field, value) => setPersona((prev) => ({ ...prev, [field]: value }));

  const updateArrayField = (field, index, value) => {
    setPersona((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (field) => setPersona((prev) => ({ ...prev, [field]: [...prev[field], ''] }));

  const removeArrayItem = (field, index) => {
    if (persona[field].length > 1) {
      setPersona((prev) => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index),
      }));
    }
  };

  const toggleChannel = (channelId) => {
    setPersona((prev) => ({
      ...prev,
      channels: prev.channels.includes(channelId)
        ? prev.channels.filter((c) => c !== channelId)
        : [...prev.channels, channelId],
    }));
  };

  const downloadPDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Buyer Persona - ${persona.name || t.tools.pages.buyerPersona.personaName}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; color: #1e293b; background: #f8fafc; }
            .container { max-width: 800px; margin: 0 auto; background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            .header { text-align: center; padding-bottom: 30px; border-bottom: 2px solid #e2e8f0; margin-bottom: 30px; }
            .avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #8b5cf6, #a855f7); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
            .avatar span { color: white; font-size: 32px; font-weight: bold; }
            h1 { font-size: 28px; color: #1e293b; margin-bottom: 8px; }
            .subtitle { color: #64748b; font-size: 16px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 30px; }
            .section { background: #f8fafc; border-radius: 12px; padding: 20px; }
            .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; margin-bottom: 16px; font-weight: 600; }
            .field { margin-bottom: 12px; }
            .field-label { font-size: 12px; color: #94a3b8; }
            .field-value { font-size: 14px; color: #1e293b; font-weight: 500; }
            .list { list-style: none; }
            .list li { padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; display: flex; align-items: center; gap: 8px; }
            .list li:last-child { border-bottom: none; }
            .full-width { grid-column: span 2; }
            .channels { display: flex; flex-wrap: wrap; gap: 8px; }
            .channel { background: #8b5cf6; color: white; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 500; }
            .bio { font-size: 14px; line-height: 1.6; color: #475569; }
            @media print { body { background: white; padding: 0; } .container { box-shadow: none; } }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="avatar"><span>${persona.name ? persona.name.charAt(0).toUpperCase() : '?'}</span></div>
              <h1>${persona.name || 'Buyer Persona'}</h1>
              <p class="subtitle">${persona.occupation || t.tools.pages.buyerPersona.occupation} • ${persona.age ? `${persona.age} ${t.tools.pages.buyerPersona.age}` : ''} • ${persona.location || t.tools.pages.buyerPersona.location}</p>
            </div>

            <div class="grid">
              <div class="section">
                <div class="section-title">📋 ${t.tools.pages.buyerPersona.tabs.info}</div>
                <div class="field"><div class="field-label">${t.tools.pages.buyerPersona.age}</div><div class="field-value">${persona.age || '-'}</div></div>
                <div class="field"><div class="field-label">${t.tools.pages.buyerPersona.gender}</div><div class="field-value">${persona.gender || t.tools.pages.buyerPersona.genderSelect}</div></div>
                <div class="field"><div class="field-label">${t.tools.pages.buyerPersona.location}</div><div class="field-value">${persona.location || '-'}</div></div>
                <div class="field"><div class="field-label">${t.tools.pages.buyerPersona.education}</div><div class="field-value">${persona.education || '-'}</div></div>
                <div class="field"><div class="field-label">${t.tools.pages.buyerPersona.income}</div><div class="field-value">${persona.income || '-'}</div></div>
              </div>

              <div class="section">
                <div class="section-title">🎯 ${t.tools.pages.buyerPersona.goals}</div>
                <ul class="list">${persona.goals.filter((g) => g).map((g) => `<li>✓ ${g}</li>`).join('') || `<li>${t.tools.pages.buyerPersona.preferNotToSay}</li>`}</ul>
              </div>

              <div class="section">
                <div class="section-title">⚠️ ${t.tools.pages.buyerPersona.painPoints}</div>
                <ul class="list">${persona.painPoints.filter((p) => p).map((p) => `<li>• ${p}</li>`).join('') || `<li>${t.tools.pages.buyerPersona.preferNotToSay}</li>`}</ul>
              </div>

              <div class="section">
                <div class="section-title">💜 ${t.tools.pages.buyerPersona.motivations}</div>
                <ul class="list">${persona.motivations.filter((m) => m).map((m) => `<li>❤ ${m}</li>`).join('') || `<li>${t.tools.pages.buyerPersona.preferNotToSay}</li>`}</ul>
              </div>

              <div class="section full-width">
                <div class="section-title">🖋 ${t.tools.pages.buyerPersona.bio}</div>
                <p class="bio">${persona.bio || t.tools.pages.buyerPersona.preferNotToSay}</p>
              </div>

              <div class="section full-width">
                <div class="section-title">📱 ${t.tools.pages.buyerPersona.preferredChannels}</div>
                <div class="channels">${persona.channels.map((c) => {
                  const channel = channelOptions.find((ch) => ch.id === c);
                  return channel ? `<span class="channel">${channel.icon} ${channel.label}</span>` : '';
                }).join('') || `<span style="color: #94a3b8;">${t.tools.pages.buyerPersona.preferNotToSay}</span>`}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const completionPercentage = () => {
    const fields = [
      persona.name,
      persona.age,
      persona.gender,
      persona.occupation,
      persona.income,
      persona.education,
      persona.location,
      persona.bio,
      persona.goals.filter((g) => g).length > 0,
      persona.painPoints.filter((p) => p).length > 0,
      persona.channels.length > 0,
    ];
    const filled = fields.filter(Boolean).length;
    return Math.round((filled / fields.length) * 100);
  };

  return (
    <ToolPageLayout
      title={t.tools.persona.title}
      subtitle={t.tools.persona.description}
      icon={Users}
      gradient="from-blue-600 to-cyan-600"
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden">
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">{t.tools.pages.buyerPersona.completed}</span>
                <span className="text-sm font-medium text-blue-400">{completionPercentage()}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${completionPercentage()}%` }} className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="p-6">
              <TabsList className="grid grid-cols-4 bg-slate-800/50 p-1 rounded-xl mb-6">
                <TabsTrigger value="info" className="rounded-lg data-[state=active]:bg-blue-600">
                  <User className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{t.tools.pages.buyerPersona.tabs.info}</span>
                </TabsTrigger>
                <TabsTrigger value="goals" className="rounded-lg data-[state=active]:bg-blue-600">
                  <Target className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{t.tools.pages.buyerPersona.tabs.goals}</span>
                </TabsTrigger>
                <TabsTrigger value="pain" className="rounded-lg data-[state=active]:bg-blue-600">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{t.tools.pages.buyerPersona.tabs.pain}</span>
                </TabsTrigger>
                <TabsTrigger value="channels" className="rounded-lg data-[state=active]:bg-blue-600">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{t.tools.pages.buyerPersona.tabs.channels}</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="info" className="space-y-6 mt-0">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">{t.tools.pages.buyerPersona.personaName}</Label>
                    <Input value={persona.name} onChange={(e) => updateField('name', e.target.value)} placeholder={t.tools.pages.buyerPersona.personaNamePlaceholder} className="bg-slate-800/50 border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">{t.tools.pages.buyerPersona.age}</Label>
                    <Input value={persona.age} onChange={(e) => updateField('age', e.target.value)} placeholder={t.tools.pages.buyerPersona.agePlaceholder} className="bg-slate-800/50 border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">{t.tools.pages.buyerPersona.gender}</Label>
                    <Select value={persona.gender} onValueChange={(v) => updateField('gender', v)}>
                      <SelectTrigger className="bg-slate-800/50 border-slate-700">
                        <SelectValue placeholder={t.tools.pages.buyerPersona.genderSelect} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={t.tools.pages.buyerPersona.female}>{t.tools.pages.buyerPersona.female}</SelectItem>
                        <SelectItem value={t.tools.pages.buyerPersona.male}>{t.tools.pages.buyerPersona.male}</SelectItem>
                        <SelectItem value={t.tools.pages.buyerPersona.other}>{t.tools.pages.buyerPersona.other}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">{t.tools.pages.buyerPersona.occupation}</Label>
                    <Input value={persona.occupation} onChange={(e) => updateField('occupation', e.target.value)} placeholder={t.tools.pages.buyerPersona.occupationPlaceholder} className="bg-slate-800/50 border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">{t.tools.pages.buyerPersona.income}</Label>
                    <Input value={persona.income} onChange={(e) => updateField('income', e.target.value)} placeholder={t.tools.pages.buyerPersona.incomePlaceholder} className="bg-slate-800/50 border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">{t.tools.pages.buyerPersona.education}</Label>
                    <Input value={persona.education} onChange={(e) => updateField('education', e.target.value)} placeholder={t.tools.pages.buyerPersona.educationPlaceholder} className="bg-slate-800/50 border-slate-700" />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <Label className="text-slate-300">{t.tools.pages.buyerPersona.location}</Label>
                    <Input value={persona.location} onChange={(e) => updateField('location', e.target.value)} placeholder={t.tools.pages.buyerPersona.locationPlaceholder} className="bg-slate-800/50 border-slate-700" />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <Label className="text-slate-300">{t.tools.pages.buyerPersona.bio}</Label>
                    <Textarea value={persona.bio} onChange={(e) => updateField('bio', e.target.value)} placeholder={t.tools.pages.buyerPersona.bioPlaceholder} className="bg-slate-800/50 border-slate-700 min-h-[100px]" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="goals" className="space-y-6 mt-0">
                <div>
                  <Label className="text-slate-300 mb-4 block">{t.tools.pages.buyerPersona.goals}</Label>
                  <ArrayEditor items={persona.goals} onUpdate={(i, v) => updateArrayField('goals', i, v)} onAdd={() => addArrayItem('goals')} onRemove={(i) => removeArrayItem('goals', i)} placeholder={t.tools.pages.buyerPersona.goalsPlaceholder} icon={Target} iconColor="text-emerald-400" addLabel={t.tools.pages.priorityMatrix.add} />
                </div>
              </TabsContent>

              <TabsContent value="pain" className="space-y-8 mt-0">
                <div>
                  <Label className="text-slate-300 mb-4 block">{t.tools.pages.buyerPersona.painPoints}</Label>
                  <ArrayEditor items={persona.painPoints} onUpdate={(i, v) => updateArrayField('painPoints', i, v)} onAdd={() => addArrayItem('painPoints')} onRemove={(i) => removeArrayItem('painPoints', i)} placeholder={t.tools.pages.buyerPersona.painPointsPlaceholder} icon={AlertCircle} iconColor="text-rose-400" addLabel={t.tools.pages.priorityMatrix.add} />
                </div>
                <div>
                  <Label className="text-slate-300 mb-4 block">{t.tools.pages.buyerPersona.motivations}</Label>
                  <ArrayEditor items={persona.motivations} onUpdate={(i, v) => updateArrayField('motivations', i, v)} onAdd={() => addArrayItem('motivations')} onRemove={(i) => removeArrayItem('motivations', i)} placeholder={t.tools.pages.buyerPersona.motivationsPlaceholder} icon={Heart} iconColor="text-pink-400" addLabel={t.tools.pages.priorityMatrix.add} />
                </div>
              </TabsContent>

              <TabsContent value="channels" className="mt-0">
                <Label className="text-slate-300 mb-4 block">{t.tools.pages.buyerPersona.preferredChannels}</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {channelOptions.map((channel) => (
                    <motion.button
                      key={channel.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleChannel(channel.id)}
                      className={`p-4 rounded-xl border text-left transition-all relative ${
                        persona.channels.includes(channel.id)
                          ? 'bg-blue-600/20 border-blue-500/50 text-blue-300'
                          : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <span className="text-2xl block mb-2">{channel.icon}</span>
                      <span className="text-sm font-medium">{channel.label}</span>
                      {persona.channels.includes(channel.id) && <CheckCircle className="w-4 h-4 absolute top-2 right-2 text-blue-400" />}
                    </motion.button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-24 space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                  <span className="text-4xl font-bold text-white">{persona.name ? persona.name.charAt(0).toUpperCase() : '?'}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{persona.name || t.tools.pages.buyerPersona.personaName}</h3>
                <p className="text-slate-400 mt-1">{persona.occupation || t.tools.pages.buyerPersona.occupation} • {persona.age || t.tools.pages.buyerPersona.age}</p>
              </div>

              <div className="space-y-4">
                {persona.location && (
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-300">{persona.location}</span>
                  </div>
                )}
                {persona.education && (
                  <div className="flex items-center gap-3 text-sm">
                    <GraduationCap className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-300">{persona.education}</span>
                  </div>
                )}
                {persona.income && (
                  <div className="flex items-center gap-3 text-sm">
                    <DollarSign className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-300">{persona.income}</span>
                  </div>
                )}

                {persona.bio && (
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-sm text-slate-400 leading-relaxed">{persona.bio}</p>
                  </div>
                )}

                {persona.goals.filter((g) => g).length > 0 && (
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">{t.tools.pages.buyerPersona.goals}</p>
                    {persona.goals.filter((g) => g).map((goal, i) => (
                      <p key={i} className="text-sm text-slate-300 flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {goal}
                      </p>
                    ))}
                  </div>
                )}

                {persona.painPoints.filter((p) => p).length > 0 && (
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">{t.tools.pages.buyerPersona.painPoints}</p>
                    {persona.painPoints.filter((p) => p).map((point, i) => (
                      <p key={i} className="text-sm text-slate-300 flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        {point}
                      </p>
                    ))}
                  </div>
                )}

                {persona.channels.length > 0 && (
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">{t.tools.pages.buyerPersona.tabs.channels}</p>
                    <div className="flex flex-wrap gap-2">
                      {persona.channels.map((channelId) => {
                        const channel = channelOptions.find((c) => c.id === channelId);
                        return channel ? (
                          <span key={channelId} className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                            {channel.icon} {channel.label}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <Button onClick={downloadPDF} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              <Download className="w-4 h-4 mr-2" />
              {t.tools.pages.buyerPersona.downloadPDF}
            </Button>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-12 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8">
        <h3 className="text-xl font-semibold text-white mb-6">{t.tools.pages.buyerPersona.whyCreate}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EducationCard title={t.tools.pages.buyerPersona.personalizeMessage} description={t.tools.pages.buyerPersona.personalizeMessageDesc} />
          <EducationCard title={t.tools.pages.buyerPersona.improveSegmentation} description={t.tools.pages.buyerPersona.improveSegmentationDesc} />
          <EducationCard title={t.tools.pages.buyerPersona.alignTeam} description={t.tools.pages.buyerPersona.alignTeamDesc} />
          <EducationCard title={t.tools.pages.buyerPersona.increaseConversions} description={t.tools.pages.buyerPersona.increaseConversionsDesc} />
        </div>
      </motion.div>
    </ToolPageLayout>
  );
}

function ArrayEditor({ items, onUpdate, onAdd, onRemove, placeholder, icon: Icon, iconColor, addLabel }) {
  return (
    <div className="space-y-3">
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex gap-2">
            <div className="relative flex-1">
              <Icon className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${iconColor}`} />
              <Input value={item} onChange={(e) => onUpdate(index, e.target.value)} placeholder={placeholder} className="bg-slate-800/50 border-slate-700 pl-10" />
            </div>
            {items.length > 1 && (
              <Button variant="ghost" size="icon" onClick={() => onRemove(index)} className="text-slate-400 hover:text-rose-400">
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
      <Button variant="outline" onClick={onAdd} className="w-full border-dashed border-slate-700 text-slate-400 hover:text-white hover:border-slate-600">
        <Plus className="w-4 h-4 mr-2" />
        {addLabel}
      </Button>
    </div>
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
