import React from 'react';

const myCourses = [
  {
    title: 'AI & Virtual Reality',
    sessions: '9/12',
    image: '/images/ai-vr.jpg',
    avatars: 17,
  },
  {
    title: 'Photography',
    sessions: '16/24',
    image: '/images/photography.jpg',
    avatars: 9,
  },
  {
    title: 'Business Ecosystem: Introduction',
    sessions: '11/18',
    image: '/images/business.jpg',
    avatars: 11,
  },
  {
    title: 'React Native Development',
    sessions: '18/37',
    image: '/images/ml.jpg',
    avatars: 8,
  },
];

export default function MyCourses() {
  // Accent colors for each course row
  const accentColors = [
    'bg-gradient-to-r from-[#7C3AED] to-[#A78BFA]', // purple
    'bg-gradient-to-r from-[#38BDF8] to-[#818CF8]', // blue
    'bg-gradient-to-r from-[#22C55E] to-[#A3E635]', // green
    'bg-gradient-to-r from-[#F472B6] to-[#FBBF24]', // pink/yellow
  ];

  // Example avatar images (replace with real user images if available)
  const avatars = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/45.jpg',
    'https://randomuser.me/api/portraits/women/46.jpg',
    'https://randomuser.me/api/portraits/men/47.jpg',
    'https://randomuser.me/api/portraits/women/48.jpg',
  ];

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-tight">My Courses</h2>
        <a href="#" className="text-[#7C3AED] text-sm font-medium">View all</a>
      </div>
      <div className="space-y-4">
        {myCourses.map((course, idx) => (
          <div
            key={idx}
            className="relative flex items-center bg-white rounded-2xl shadow-lg p-4 group transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            {/* Accent bar */}
            <div className={`absolute left-0 top-0 h-full w-2 rounded-l-2xl ${accentColors[idx % accentColors.length]}`}></div>
            {/* Course icon */}
            <img
              src={course.image}
              alt={course.title}
              className="w-12 h-12 rounded-xl mr-4 object-cover border-2 border-[#F3F4F6] shadow-sm"
            />
            <div className="flex-1">
              <div className="font-semibold text-base text-gray-900 flex items-center gap-2">
                {course.title}
                {/* Emoji or icon for course type, optional */}
                {idx === 0 && <span className="ml-1">🕶️</span>}
                {idx === 1 && <span className="ml-1">📷</span>}
                {idx === 2 && <span className="ml-1">🧑‍💼</span>}
                {idx === 3 && <span className="ml-1">⚛️</span>}
              </div>
              <div className="text-xs text-gray-500 mt-1">Sessions completed: {course.sessions}</div>
            </div>
            <div className="flex items-center ml-4">
              <div className="flex -space-x-2">
                {avatars.slice(0, 3).map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="User"
                    className="w-7 h-7 rounded-full border-2 border-white shadow-sm object-cover"
                    style={{ zIndex: 10 - i }}
                  />
                ))}
              </div>
              <span className="ml-2 text-xs text-gray-500 font-semibold">+{course.avatars}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
