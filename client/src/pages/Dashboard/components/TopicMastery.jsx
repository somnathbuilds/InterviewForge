import { dsaSidebarData } from "../../../data/dsaData";

function TopicMastery() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Topic Mastery</span>
      <div className="space-y-3.5">
        {dsaSidebarData.topicCompletion.map((topic, idx) => {
          const completionPercent = Math.round((topic.solved / topic.total) * 100);
          return (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                <span className="truncate max-w-[150px]">{topic.topic}</span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {topic.solved}/{topic.total} Solved
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: `${completionPercent}%` }}></div>
                </div>
                <span className="text-[9px] font-bold text-slate-500 w-8 text-right">{completionPercent}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopicMastery;
