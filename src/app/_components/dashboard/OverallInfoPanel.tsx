import React from 'react';

const info = [
  { label: 'Score', value: 210, change: '+13%', color: 'bg-[#E3F0FF]', icon: (
    <img src="https://img.icons8.com/color/48/000000/combo-chart--v1.png" alt="score" className="w-10 h-10" />
  ) },
  { label: 'Completed Course', value: '34h', change: '+15%', color: 'bg-[#E9E4FF]', icon: (
    <img src="https://img.icons8.com/color/48/000000/checked--v1.png" alt="completed" className="w-10 h-10" />
  ) },
  { label: 'Total Student', value: 17, change: '-2%', color: 'bg-[#F3F0FF]', icon: (
    <img src="https://img.icons8.com/color/48/000000/group-foreground-selected.png" alt="students" className="w-10 h-10" />
  ) },
  { label: 'Total Hours', value: 11, change: '-9%', color: 'bg-[#FFF0F3]', icon: (
    <img src="https://img.icons8.com/color/48/000000/alarm-clock--v1.png" alt="hours" className="w-10 h-10" />
  ) },
];

export default function OverallInfoPanel() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-8">
      <div className="text-2xl font-extrabold tracking-tight mb-7 text-gray-900">Overall Information</div>
      <div className="grid grid-cols-2 gap-7">
        {info.map((item, idx) => (
          <div key={idx} className={`flex flex-col items-center justify-center gap-2 ${item.color} rounded-2xl p-7 shadow-sm`}>
            <div>{item.icon}</div>
            <div className="text-base font-semibold text-gray-900 mb-1">{item.label}</div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-gray-800">{item.value}</span>
              <span className={`text-base font-bold ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{item.change}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
