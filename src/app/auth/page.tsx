import React from "react";
import Link from "next/link";

export default function AuthIndexPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">Welcome to Nexwell Learning</h2>
        <div className="flex flex-col gap-4">
          <Link href="/auth/login" className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">Sign In</Link>
          <Link href="/auth/signup" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Sign Up</Link>
          <Link href="/auth/social-stub" className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition">Social / SSO / SAML</Link>
        </div>
      </div>
    </div>
  );
}
