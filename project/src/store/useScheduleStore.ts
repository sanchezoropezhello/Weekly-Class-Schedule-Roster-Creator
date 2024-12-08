import { create } from 'zustand';
import { Task } from '../types/schedule';
import { generateId } from '../utils/helpers';

interface ScheduleState {
  tasks: Task[];
  addTask: (taskData: Omit<Task, 'id'>) => void;
  editTask: (id: string, taskData: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  updateTaskPosition: (id: string, dayOfWeek: number, startTime: string) => void;
}

export const useScheduleStore = create<ScheduleState>((set) => ({
  tasks: [],
  addTask: (taskData) =>
    set((state) => ({
      tasks: [...state.tasks, { ...taskData, id: generateId() }],
    })),
  editTask: (id, taskData) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, ...taskData } : t
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),
  updateTaskPosition: (id, dayOfWeek, startTime) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, dayOfWeek, startTime } : t
      ),
    })),
}));