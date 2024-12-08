import React from 'react';
import { Calendar } from 'lucide-react';
import { WeeklySchedule } from './components/WeeklySchedule';
import { TaskForm } from './components/TaskForm';
import { CurrentTime } from './components/CurrentTime';

function App() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold text-white">Weekly Planner</h1>
              </div>
              <CurrentTime />
            </div>
            <TaskForm />
          </div>
          <WeeklySchedule />
        </div>
      </div>
    </div>
  );
}

export default App;