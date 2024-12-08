import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScheduleStore } from '../store/useScheduleStore';
import { generateTaskColor } from '../utils/helpers';

export const TaskForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const addTask = useScheduleStore((state) => state.addTask);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startTime: '09:00',
    endTime: '10:30',
    dayOfWeek: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask({
      ...formData,
      color: generateTaskColor(),
    });
    setIsOpen(false);
    setFormData({
      name: '',
      description: '',
      startTime: '09:00',
      endTime: '10:30',
      dayOfWeek: 0,
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-6 py-3 bg-primary/20 hover:bg-primary/30 text-white rounded-xl transition-colors"
      >
        <Plus className="w-5 h-5" />
        Add Task
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass-card p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">New Task</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Task name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border-white/10 text-white placeholder-white/40 rounded-xl"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-white/5 border-white/10 text-white placeholder-white/40 rounded-xl"
                  rows={3}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-1">Start Time</label>
                    <input
                      type="time"
                      value={formData.startTime}
                      onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                      className="w-full bg-white/5 border-white/10 text-white rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1">End Time</label>
                    <input
                      type="time"
                      value={formData.endTime}
                      onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                      className="w-full bg-white/5 border-white/10 text-white rounded-xl"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-white/60 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary/20 hover:bg-primary/30 text-white rounded-xl"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};