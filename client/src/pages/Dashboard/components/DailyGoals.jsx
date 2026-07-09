import { useState } from "react";
import { dailyGoalsData } from "../../../data/dashboardData";

function DailyGoals() {
  const [tasks, setTasks] = useState(dailyGoalsData);

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
      
      {/* Title Header */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-bold text-slate-800">Daily Preparation Goals</h3>
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100/50">
            {completedCount}/{tasks.length} Completed
          </span>
        </div>

        {/* Completion Progress bar */}
        <div className="mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between gap-4">
          <span className="text-xs font-semibold text-slate-500">Today's Progress</span>
          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <span className="text-xs font-bold text-slate-700">{progressPercent}%</span>
        </div>

        {/* Checklist */}
        <div className="space-y-3.5">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => handleToggle(task.id)}
              className={`flex items-start gap-3 p-2.5 rounded-xl border transition cursor-pointer select-none ${
                task.completed
                  ? "bg-slate-50/50 border-slate-150 text-slate-400"
                  : "bg-white border-slate-100 hover:border-slate-200 text-slate-700"
              }`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {}} // Controlled by outer div onClick
                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <div className="flex-1">
                <p className={`text-xs sm:text-sm font-semibold leading-tight ${task.completed ? "line-through text-slate-400" : "text-slate-800"}`}>
                  {task.name}
                </p>
                <span className={`text-[9px] font-bold uppercase tracking-wider mt-1.5 inline-block ${
                  task.category === "DSA"
                    ? "text-blue-500"
                    : task.category === "Core Subjects"
                    ? "text-violet-500"
                    : task.category === "Aptitude"
                    ? "text-indigo-500"
                    : "text-slate-500"
                }`}>
                  {task.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Banner */}
      <div className="mt-6 pt-4.5 border-t border-slate-100/60 flex items-center justify-between text-xs text-slate-400">
        <span>Resets at midnight</span>
        <button className="text-blue-600 font-bold hover:text-blue-700 transition cursor-pointer">
          + Add Custom Task
        </button>
      </div>

    </div>
  );
}

export default DailyGoals;
