import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Grid3X3, Plus, X, GripVertical, Zap, Clock, AlertTriangle, Ban, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import ToolPageLayout from '@/Components/shared/ToolPageLayout';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';

const getQuadrants = (t) => [
  {
    id: 'quick-wins',
    name: t.tools.pages.priorityMatrix.quickWins,
    description: t.tools.pages.priorityMatrix.quickWinsDesc,
    longDescription: t.tools.pages.priorityMatrix.step1Desc,
    step: t.tools.pages.priorityMatrix.step1,
    icon: Zap,
    gradient: 'from-emerald-600 to-teal-600',
    bgGradient: 'from-emerald-600/10 to-teal-600/10',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
    priority: 1,
  },
  {
    id: 'major-projects',
    name: t.tools.pages.priorityMatrix.majorProjects,
    description: t.tools.pages.priorityMatrix.majorProjectsDesc,
    longDescription: t.tools.pages.priorityMatrix.step2Desc,
    step: t.tools.pages.priorityMatrix.step2,
    icon: Clock,
    gradient: 'from-blue-600 to-indigo-600',
    bgGradient: 'from-blue-600/10 to-indigo-600/10',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400',
    priority: 2,
  },
  {
    id: 'fill-ins',
    name: t.tools.pages.priorityMatrix.minorTasks,
    description: t.tools.pages.priorityMatrix.minorTasksDesc,
    longDescription: t.tools.pages.priorityMatrix.step3Desc,
    step: t.tools.pages.priorityMatrix.step3,
    icon: AlertTriangle,
    gradient: 'from-amber-600 to-orange-600',
    bgGradient: 'from-amber-600/10 to-orange-600/10',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-400',
    priority: 3,
  },
  {
    id: 'avoid',
    name: t.tools.pages.priorityMatrix.avoid,
    description: t.tools.pages.priorityMatrix.avoidDesc,
    longDescription: t.tools.pages.priorityMatrix.step4Desc,
    step: t.tools.pages.priorityMatrix.step4,
    icon: Ban,
    gradient: 'from-rose-600 to-red-600',
    bgGradient: 'from-rose-600/10 to-red-600/10',
    borderColor: 'border-rose-500/30',
    textColor: 'text-rose-400',
    priority: 4,
  },
];

const initialTasks = {
  'quick-wins': [],
  'major-projects': [],
  'fill-ins': [],
  avoid: [],
};

export default function PriorityMatrix() {
  const { t } = useLanguage();
  const quadrants = getQuadrants(t);
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [selectedQuadrant, setSelectedQuadrant] = useState('quick-wins');

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks((prev) => ({
      ...prev,
      [selectedQuadrant]: [...prev[selectedQuadrant], { id: Date.now().toString(), text: newTask, createdAt: new Date().toISOString() }],
    }));
    setNewTask('');
  };

  const removeTask = (quadrantId, taskId) => setTasks((prev) => ({ ...prev, [quadrantId]: prev[quadrantId].filter((t) => t.id !== taskId) }));

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceQuadrant = source.droppableId;
    const destQuadrant = destination.droppableId;
    const newTasks = { ...tasks };
    const [movedTask] = newTasks[sourceQuadrant].splice(source.index, 1);
    newTasks[destQuadrant].splice(destination.index, 0, movedTask);
    setTasks(newTasks);
  };

  const totalTasks = Object.values(tasks).flat().length;
  const getQuadrantStats = () => quadrants.map((q) => ({ ...q, count: tasks[q.id].length }));

  return (
    <ToolPageLayout
      title={t.tools.matrix.title}
      subtitle={t.tools.matrix.description}
      icon={Grid3X3}
      gradient="from-emerald-600 to-teal-600"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addTask()} placeholder={t.tools.pages.priorityMatrix.newTask} className="bg-slate-800/50 border-slate-700 h-12" />
          </div>

          <div className="flex flex-wrap gap-2">
            {quadrants.map((q) => (
              <motion.button
                key={q.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedQuadrant(q.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${selectedQuadrant === q.id ? `bg-gradient-to-r ${q.gradient} text-white` : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'}`}
              >
                <q.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{q.name}</span>
              </motion.button>
            ))}
          </div>

          <Button onClick={addTask} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 h-12 px-6">
            <Plus className="w-4 h-4 mr-2" />
            {t.tools.pages.priorityMatrix.add}
          </Button>
        </div>
      </motion.div>

      <div className="flex justify-between items-center mb-4 px-2">
        <span className="text-sm text-slate-500 font-medium">{t.tools.pages.priorityMatrix.lowEffort}</span>
        <span className="text-sm text-slate-500 font-medium">{t.tools.pages.priorityMatrix.highEffort}</span>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid md:grid-cols-2 gap-4 relative">
          <div className="hidden md:flex absolute -left-8 top-1/4 -translate-y-1/2 items-center">
            <span className="text-sm text-slate-500 font-medium -rotate-90 whitespace-nowrap">{t.tools.pages.priorityMatrix.highImpact}</span>
          </div>
          <div className="hidden md:flex absolute -left-8 top-3/4 -translate-y-1/2 items-center">
            <span className="text-sm text-slate-500 font-medium -rotate-90 whitespace-nowrap">{t.tools.pages.priorityMatrix.lowImpact}</span>
          </div>

          {quadrants.map((quadrant, index) => (
            <QuadrantCard key={quadrant.id} quadrant={quadrant} tasks={tasks[quadrant.id]} onRemove={removeTask} index={index} t={t} />
          ))}
        </div>
      </DragDropContext>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-slate-500">{t.tools.pages.priorityMatrix.totalTasks}</p>
              <p className="text-2xl font-bold text-white">{totalTasks}</p>
            </div>
            <div className="flex gap-4">
              {getQuadrantStats().map((q) => (
                <div key={q.id} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${q.gradient}`} />
                  <span className="text-sm text-slate-400">{q.count}</span>
                </div>
              ))}
            </div>
          </div>

          {tasks['quick-wins'].length > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <Lightbulb className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">{t.tools.pages.priorityMatrix.quickWins}: {tasks['quick-wins'].length} {t.tools.pages.priorityMatrix.quickWinsCount}</span>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8">
        <h3 className="text-xl font-semibold text-white mb-6">{t.tools.pages.priorityMatrix.howToUse}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quadrants.map((q) => (
            <div key={q.id} className="relative">
              <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r ${q.gradient} flex items-center justify-center text-white font-bold text-sm`}>{q.step}</div>
              <div className={`p-4 rounded-xl bg-gradient-to-br ${q.bgGradient} border ${q.borderColor}`}>
                <div className="flex items-center gap-2 mb-2">
                  <q.icon className={`w-5 h-5 ${q.textColor}`} />
                  <h4 className="font-semibold text-white">{q.name}</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{q.longDescription}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <h4 className="font-semibold text-white mb-2">{t.tools.pages.priorityMatrix.proTip}</h4>
          <p className="text-sm text-slate-400 leading-relaxed">{t.tools.pages.priorityMatrix.proTipDesc}</p>
        </div>
      </motion.div>
    </ToolPageLayout>
  );
}

function QuadrantCard({ quadrant, tasks, onRemove, index, t }) {
  return (
    <Droppable droppableId={quadrant.id}>
      {(provided, snapshot) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`rounded-2xl border transition-all duration-300 ${snapshot.isDraggingOver ? `bg-gradient-to-br ${quadrant.bgGradient} ${quadrant.borderColor} ring-2 ring-offset-2 ring-offset-slate-950 ring-slate-600` : 'bg-slate-900/50 border-slate-800'}`}
        >
          <div className={`p-4 border-b border-slate-800 bg-gradient-to-r ${quadrant.bgGradient} rounded-t-2xl`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${quadrant.gradient} flex items-center justify-center`}>
                  <quadrant.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{quadrant.name}</h3>
                  <p className="text-xs text-slate-400">{quadrant.description}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium bg-slate-800/50 ${quadrant.textColor}`}>{tasks.length}</span>
            </div>
          </div>

          <div className="p-3 min-h-[200px]">
            <AnimatePresence>
              {tasks.map((task, taskIndex) => (
                <Draggable key={task.id} draggableId={task.id} index={taskIndex}>
                  {(provided, snapshot) => (
                    <motion.div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className={`group flex items-center gap-3 mb-2 p-3 rounded-xl transition-all ${snapshot.isDragging ? 'bg-slate-700 shadow-lg ring-2 ring-violet-500/50' : 'bg-slate-800/50 hover:bg-slate-800'}`}
                    >
                      <div {...provided.dragHandleProps} className="cursor-grab text-slate-500 hover:text-slate-300">
                        <GripVertical className="w-4 h-4" />
                      </div>
                      <span className="flex-1 text-sm text-slate-300">{task.text}</span>
                      <button onClick={() => onRemove(quadrant.id, task.id)} className="opacity-0 group-hover:opacity-100 p-1 rounded-lg hover:bg-slate-700 text-slate-500 hover:text-rose-400 transition-all">
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </Draggable>
              ))}
            </AnimatePresence>
            {provided.placeholder}
            {tasks.length === 0 && (
              <div className="h-full min-h-[150px] flex items-center justify-center">
                <p className="text-sm text-slate-600">{t.tools.pages.priorityMatrix.dragHere}</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </Droppable>
  );
}
