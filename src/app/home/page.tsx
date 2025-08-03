import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-white shadow-sm">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-purple-700">Nexwell</div>
        </div>
        <div className="flex space-x-4">
          <Link href="/auth/login">
            <button className="text-purple-600 border border-purple-600 hover:bg-purple-50 font-medium rounded-md px-4 py-2 transition">
              Log In
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md px-4 py-2 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Learning Experience with <span className="text-purple-600">Nexwell</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Personalized learning paths, interactive content, and progress tracking to help you achieve your educational goals faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/auth/signup">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md text-lg px-8 py-3 transition">
                Get Started Free
              </button>
            </Link>
            <Link href="#features">
              <button className="text-purple-600 border border-purple-600 hover:bg-purple-50 font-medium rounded-md text-lg px-8 py-3 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Powerful Features for Effective Learning</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-6 rounded-lg bg-purple-50">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M12 19v-1m0-18v1m0 18c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning Paths</h3>
              <p className="text-gray-600">
                AI-powered recommendations that adapt to your learning style and pace.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Content</h3>
              <p className="text-gray-600">
                Engaging videos, quizzes, and simulations to keep you motivated.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Visualize your learning journey with detailed analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">What Our Learners Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                "Nexwell transformed my learning experience. The personalized paths helped me focus on what I needed to learn most."
              </p>
              <p className="font-semibold">- Sarah K., Software Developer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                "The interactive content keeps me engaged, and I've seen real progress in my skills since I started using Nexwell."
              </p>
              <p className="font-semibold">- Michael T., Data Analyst</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of learners who have accelerated their education with Nexwell.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/auth/signup">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-medium rounded-md text-lg px-8 py-3 transition">
                Start Learning Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-4">Nexwell</div>
              <p className="text-gray-400">
                Empowering learners worldwide with personalized education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Features</Link></li>
                <li><Link href="#" className="hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#" className="hover:text-white">Tutorials</Link></li>
                <li><Link href="#" className="hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2023 Nexwell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
