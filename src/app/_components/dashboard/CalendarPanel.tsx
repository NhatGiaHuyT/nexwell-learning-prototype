import React from 'react';

export default function CalendarPanel() {
  // Example event days for dots
  const eventDays = [24, 25, 27, 28];
  return (
    <section className="bg-white rounded-3xl shadow-lg p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="text-base text-gray-400 mb-1">Friday</div>
          <div className="text-3xl font-extrabold tracking-tight text-gray-900">April 5, 2024</div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-[#F3F0FF] hover:bg-[#E9E4FF] text-[#7C3AED]"><svg width="20" height="20" fill="none"><path d="M13 5l-5 5 5 5" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/></svg></button>
          <span className="relative">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
          </span>
        </div>
      </div>
      {/* Calendar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-base text-gray-500 font-semibold">April 2024</span>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-[#F3F0FF] hover:bg-[#E9E4FF] text-[#7C3AED]"><svg width="20" height="20" fill="none"><path d="M13 5l-5 5 5 5" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/></svg></button>
            <button className="p-2 rounded-full bg-[#F3F0FF] hover:bg-[#E9E4FF] text-[#7C3AED]"><svg width="20" height="20" fill="none"><path d="M7 5l5 5-5 5" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/></svg></button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
          {['Mo','Tu','We','Th','Fr','Sa','Su'].map((d,i)=>(<span key={i} className="text-gray-400 font-semibold">{d}</span>))}
        </div>
        <div className="grid grid-cols-7 gap-1 mt-1">
          {[...Array(30)].map((_,i)=>{
            const day = i+1;
            const isSelected = day === 24;
            const hasEvent = eventDays.includes(day);
            return (
              <span key={i} className={`relative flex items-center justify-center py-1 ${isSelected ? 'bg-[#7C3AED] text-white font-bold text-lg shadow rounded-full' : 'text-gray-700'} ${hasEvent && !isSelected ? 'after:content-["\u2022"] after:text-[#7C3AED] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:text-base' : ''} ${isSelected ? 'w-10 h-10' : 'w-7 h-7'} transition-all duration-150`}>{day}</span>
            );
          })}
        </div>
      </div>
      {/* Events */}
      <div className="space-y-5">
        <div className="flex items-center gap-4 bg-[#F6F4FF] rounded-2xl p-5 shadow-sm">
          <span className="bg-black text-white rounded-full p-3 shadow flex items-center justify-center"><svg width="24" height="24" fill="none"><rect width="24" height="24" rx="12" fill="#18181B"/><path d="M7 12h10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg></span>
          <div>
            <div className="text-sm font-semibold text-gray-900">Course</div>
            <div className="text-base text-gray-700 font-bold">Business Prospect Analysis</div>
            <div className="text-xs text-gray-400 mt-1">April 25 · 11:00-12:00</div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#F6F4FF] rounded-2xl p-5 shadow-sm">
          <span className="bg-[#7C3AED] text-white rounded-full p-3 shadow flex items-center justify-center"><svg width="24" height="24" fill="none"><rect width="24" height="24" rx="12" fill="#7C3AED"/><path d="M12 7v10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg></span>
          <div>
            <div className="text-sm font-semibold text-gray-900">Tutoring</div>
            <div className="text-base text-gray-700 font-bold">AI & Virtual Reality: Intro</div>
            <div className="text-xs text-gray-400 mt-1">April 27 · 14:30-15:30</div>
          </div>
        </div>
      </div>
    </section>
  );
}
