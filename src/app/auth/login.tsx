import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // NextAuth.js email+password signIn (stub, needs custom provider)
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) setError(res.error);
    if (res?.ok) window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">Sign In</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" required />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button type="submit" className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">Sign In</button>
        </form>
        <div className="mt-6 flex flex-col gap-2">
          <button type="button" onClick={() => signIn("google")}
            className="w-full py-2 px-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition">Sign in with Google</button>
          <button type="button" onClick={() => window.location.href = "/auth/social-stub"}
            className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition">SSO / SAML (Stub)</button>
        </div>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account? <Link href="/auth/signup" className="text-purple-600 font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
