import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useScheduleStore } from '../store/useScheduleStore';
import { FormInput } from './form/FormInput';
import { TimeSelect } from './form/TimeSelect';
import { generateClassColor } from '../utils/helpers';

export const ClassForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const addClass = useScheduleStore((state) => state.addClass);

  const [formData, setFormData] = useState({
    name: '',
    instructor: '',
    startTime: '09:00',
    endTime: '10:30',
    dayOfWeek: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addClass({
      ...formData,
      color: generateClassColor(),
    });
    setIsOpen(false);
    setFormData({
      name: '',
      instructor: '',
      startTime: '09:00',
      endTime: '10:30',
      dayOfWeek: 0,
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
      >
        <Plus size={20} />
        Add Class
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md m-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Add New Class</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                label="Class Name"
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
                required
              />
              <FormInput
                label="Instructor"
                value={formData.instructor}
                onChange={(value) => setFormData({ ...formData, instructor: value })}
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <TimeSelect
                  label="Start Time"
                  value={formData.startTime}
                  onChange={(value) => setFormData({ ...formData, startTime: value })}
                />
                <TimeSelect
                  label="End Time"
                  value={formData.endTime}
                  onChange={(value) => setFormData({ ...formData, endTime: value })}
                />
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light"
                >
                  Add Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};