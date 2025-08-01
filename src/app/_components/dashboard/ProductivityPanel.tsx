import React from 'react';

const data = [
  { day: 'Mon', mentoring: 60, self: 30, student: 80 },
  { day: 'Tue', mentoring: 80, self: 50, student: 90 },
  { day: 'Wed', mentoring: 70, self: 40, student: 85 },
  { day: 'Thu', mentoring: 50, self: 60, student: 75 },
  { day: 'Fri', mentoring: 90, self: 80, student: 95 },
  { day: 'Sat', mentoring: 40, self: 20, student: 60 },
  { day: 'Sun', mentoring: 30, self: 10, student: 50 },
];

export default function ProductivityPanel() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-7">
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-extrabold tracking-tight text-gray-900">Productivity</div>
        <a href="#" className="text-[#7C3AED] text-sm font-medium">View details <span className="inline-block ml-1">›</span></a>
      </div>
      <div className="w-full h-48 flex items-end gap-4">
        {data.map((d, idx) => (
          <div key={idx} className="flex flex-col items-center justify-end h-full">
            <div className="flex flex-col justify-end h-36 w-8">
              <div className="bg-blue-500 rounded-t-lg" style={{height: `${d.student}%`}}></div>
              <div className="bg-purple-400 rounded-t-lg mt-0.5" style={{height: `${d.self}%`}}></div>
              <div className="bg-black rounded-t-lg mt-0.5" style={{height: `${d.mentoring}%`}}></div>
            </div>
            <span className="text-xs text-gray-500 mt-2 font-semibold">{d.day}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-8 mt-6 text-xs">
        <span className="flex items-center"><span className="w-3 h-3 bg-black rounded mr-2 inline-block"></span>Mentoring</span>
        <span className="flex items-center"><span className="w-3 h-3 bg-purple-400 rounded mr-2 inline-block"></span>Self Improve</span>
        <span className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded mr-2 inline-block"></span>Student</span>
      </div>
    </section>
  );
}
