import { upcomingCompanies } from "../../../data/companiesData";

function UpcomingCompanies() {
  const getBadgeStyle = (type) => {
    switch (type) {
      case "emerald":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "amber":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "blue":
        return "bg-blue-50 text-blue-700 border-blue-100";
      default:
        return "bg-slate-50 text-slate-700 border-slate-100";
    }
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
      
      {/* Title Header */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-bold text-slate-800">Target Recruitment Dates</h3>
          <button className="text-xs text-blue-600 font-bold hover:text-blue-700 transition cursor-pointer">
            View All
          </button>
        </div>

        {/* Company items */}
        <div className="space-y-3.5">
          {upcomingCompanies.map((comp, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl transition duration-200"
            >
              {/* Left Brand Details */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/60 flex items-center justify-center font-extrabold text-slate-800 text-xs shadow-sm">
                  {comp.name[0]}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    {comp.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-none">
                    {comp.role}
                  </p>
                </div>
              </div>

              {/* Right Schedule Details */}
              <div className="text-right flex flex-col items-end gap-1.5">
                <span className="text-[10px] font-bold text-slate-500 leading-none">
                  {comp.date}
                </span>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${getBadgeStyle(comp.badgeType)} leading-none`}>
                  {comp.status}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Footer Banner */}
      <div className="mt-6 pt-4.5 border-t border-slate-100/60 flex items-center justify-between text-xs text-slate-400">
        <span>Schedules sync with College portal</span>
        <button className="text-blue-600 font-semibold hover:text-blue-700 transition cursor-pointer">
          Sync Calendar
        </button>
      </div>

    </div>
  );
}

export default UpcomingCompanies;
