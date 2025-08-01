"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const socialProviders = [
  {
    name: "Google",
    color: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50",
    icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="#EA4335" d="M21.6 12.227c0-.818-.073-1.604-.209-2.364H12v4.482h5.484a4.68 4.68 0 0 1-2.025 3.07v2.553h3.273c1.917-1.77 3.028-4.38 3.028-7.741z"/><path fill="#34A853" d="M12 22c2.43 0 4.47-.805 5.96-2.188l-3.273-2.553c-.91.61-2.07.97-3.347.97-2.57 0-4.75-1.735-5.53-4.07H2.73v2.56A9.997 9.997 0 0 0 12 22z"/><path fill="#4A90E2" d="M6.47 13.159a5.996 5.996 0 0 1 0-3.318V7.281H2.73a9.997 9.997 0 0 0 0 9.438l3.74-2.56z"/><path fill="#FBBC05" d="M12 6.54c1.32 0 2.5.454 3.43 1.345l2.57-2.57C16.47 3.805 14.43 3 12 3A9.997 9.997 0 0 0 2.73 7.281l3.74 2.56C7.25 8.275 9.43 6.54 12 6.54z"/></svg>
    ),
    id: "google",
  },
  {
    name: "LinkedIn",
    color: "bg-[#0077b5] text-white hover:bg-[#005983]",
    icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="#fff" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
    ),
    id: "linkedin",
  },
];

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Call backend API to create user
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Sign up failed");
      return;
    }
    // Auto-login after signup
    const loginRes = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/"
    });
    if (loginRes?.error) {
      setError("Account created, but login failed. Please try logging in.");
      return;
    }
    if (loginRes?.ok) window.location.href = loginRes.url || "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff]">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center mb-6">
          <div className="mb-2 text-4xl font-extrabold text-purple-700 tracking-tight">Nexwell</div>
          <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition" required />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-8 text-gray-400 hover:text-purple-600">
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition" required />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-8 text-gray-400 hover:text-purple-600">
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-purple-800 transition">Sign Up</button>
        </form>
        <div className="mt-6 flex flex-col gap-3">
          {socialProviders.map((provider) => (
            <button
              key={provider.id}
              type="button"
              onClick={() => signIn(provider.id)}
              className={`w-full flex items-center justify-center py-2 px-4 rounded-lg font-semibold shadow-sm transition ${provider.color}`}
            >
              {provider.icon}
              Sign up with {provider.name}
            </button>
          ))}
        </div>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-purple-600 font-semibold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
