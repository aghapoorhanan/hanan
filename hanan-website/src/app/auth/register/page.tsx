'use client'

import React, { useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gqalshbyurbfbfxfcpas.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxYWxzaGJ5dXJiZmJmeGZjcGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3ODQyNjAsImV4cCI6MjA3MzM2MDI2MH0.1NZatlMNKMS6eqSph2aS7-MRsKJHZTHLGOF3BGTpGxE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Register() {
  const [form, setForm] = useState({ phone: "", email: "", username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!/^09\d{9}$/.test(form.phone)) return setError("شماره موبایل معتبر نیست.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return setError("ایمیل معتبر نیست.");
    if (form.username.length < 3) return setError("نام کاربری حداقل ۳ حرف باشد.");
    if (form.password.length < 8) return setError("رمز عبور حداقل ۸ کاراکتر باشد.");
    setLoading(true);
    const { error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          phone: form.phone,
          username: form.username,
        },
      },
    });
    setLoading(false);
    if (signUpError) return setError(signUpError.message);
    setSuccess("ثبت‌نام با موفقیت انجام شد! لطفاً ایمیل خود را تایید کنید.");
    setForm({ phone: "", email: "", username: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D6E7F3] to-[#F8FAFC]">
      <div className="w-full max-w-md p-10 rounded-3xl shadow-2xl border border-gray-200 bg-white/70 backdrop-blur-2xl flex flex-col gap-8" style={{ boxShadow: "0 8px 32px 0 rgba(44, 62, 80, 0.18)", border: "1.5px solid #e5e7eb" }}>
        <div className="flex flex-col items-center gap-2 mb-2">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#0C0E0B] to-[#D6303A] flex items-center justify-center shadow-lg">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z"/></svg>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0C0E0B] text-center drop-shadow-lg tracking-tight">ثبت‌نام</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            name="phone"
            type="text"
            placeholder="شماره موبایل"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-3 text-lg focus:outline-none focus:border-[#D6303A] transition shadow-sm placeholder:text-gray-400 bg-white/80"
          />
          <input
            name="email"
            type="email"
            placeholder="ایمیل"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-3 text-lg focus:outline-none focus:border-[#D6303A] transition shadow-sm placeholder:text-gray-400 bg-white/80"
          />
          <input
            name="username"
            type="text"
            placeholder="نام کاربری"
            value={form.username}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-3 text-lg focus:outline-none focus:border-[#D6303A] transition shadow-sm placeholder:text-gray-400 bg-white/80"
          />
          <input
            name="password"
            type="password"
            placeholder="رمز عبور"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-5 py-3 text-lg focus:outline-none focus:border-[#D6303A] transition shadow-sm placeholder:text-gray-400 bg-white/80"
          />
          {error && <div className="text-[#D6303A] text-base text-center font-bold">{error}</div>}
          {success && <div className="text-green-600 text-base text-center font-bold">{success}</div>}
          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#0C0E0B] to-[#D6303A] text-white font-extrabold text-lg shadow-lg hover:from-[#D6303A] hover:to-[#0C0E0B] transition-all duration-200"
            disabled={loading}
          >
            {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
          </button>
        </form>
        <div className="text-sm text-center mt-2 text-gray-700">
          حساب دارید؟{' '}
          <Link href="/auth/login" className="text-[#D6303A] font-bold underline hover:text-[#0C0E0B] transition">ورود</Link>
        </div>
      </div>
    </div>
  );
}
