import React from 'react';

type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

type Course = {
  title: string;
  image: string;
  level: CourseLevel;
  users: number;
  rating: number;
  description: string;
  instructor: string;
  instructorAvatar: string;
};

const myCourses: Course[] = [
  {
    title: 'Three-month Course to Learn the Basics of Python and Start Coding.',
    image: '/images/python.jpg',
    level: 'Beginner',
    users: 118,
    rating: 5.0,
    description: 'Learn Python fundamentals and start coding with hands-on projects.',
    instructor: 'Alison Walsh',
    instructorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    title: "Beginner's Guide to Successful Company Management: Business And...",
    image: '/images/business.jpg',
    level: 'Beginner',
    users: 234,
    rating: 4.8,
    description: 'Master the basics of business management and leadership.',
    instructor: 'Patty Kutch',
    instructorAvatar: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
  {
    title: 'A Fascinating Theory of Probability. Practice. Application. How to Outpla...',
    image: '/images/probability.jpg',
    level: 'Intermediate',
    users: 57,
    rating: 4.9,
    description: 'Explore probability theory and its practical applications.',
    instructor: 'Alonzo Murray',
    instructorAvatar: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    title: 'Introduction: Machine Learning and LLM. Implementation in Modern Soft...',
    image: '/images/ml.jpg',
    level: 'Advanced',
    users: 19,
    rating: 5.0,
    description: 'Dive into machine learning and LLMs for modern software.',
    instructor: 'Gregory Harris',
    instructorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

export default function TopCourses() {
  // Level badge colors
  const levelColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-red-100 text-red-700',
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Top courses you may like</h2>
        <a href="#" className="text-[#7C3AED] text-sm font-medium">View all</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myCourses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-4 relative group hover:shadow-xl transition-all"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover rounded-xl"
              />
              <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${levelColors[course.level]}`}>{course.level}</span>
              <span className="flex items-center text-xs text-gray-500 ml-2">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87" />
                  <circle cx="9" cy="7" r="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21V11" />
                </svg>
                {course.users}
              </span>
              <span className="flex items-center text-xs text-yellow-500 ml-2">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" className="mr-1">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.174 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
                {course.rating}
              </span>
            </div>
            <div className="font-bold text-base mt-2 line-clamp-2">{course.title}</div>
            <div className="text-sm text-gray-600 mt-1 line-clamp-2">{course.description}</div>
            <div className="flex items-center mt-4">
              <img src={course.instructorAvatar} alt={course.instructor} className="w-7 h-7 rounded-full mr-2 object-cover" />
              <span className="text-xs font-medium text-gray-700">{course.instructor}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
