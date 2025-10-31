'use client'
import React, { useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gqalshbyurbfbfxfcpas.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxYWxzaGJ5dXJiZmJmeGZjcGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3ODQyNjAsImV4cCI6MjA3MzM2MDI2MH0.1NZatlMNKMS6eqSph2aS7-MRsKJHZTHLGOF3BGTpGxE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Register() {
  const [form, setForm] = useState({
    phone: "",
    email: "",
    username: "",
    password: "",
  });
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
    // اعتبارسنجی ساده
    if (!/^09\d{9}$/.test(form.phone)) return setError("شماره موبایل معتبر نیست.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return setError("ایمیل معتبر نیست.");
    if (form.username.length < 3) return setError("نام کاربری حداقل ۳ حرف باشد.");
    if (form.password.length < 8) return setError("رمز عبور حداقل ۸ کاراکتر باشد.");
    setLoading(true);
    // ثبت کاربر در Supabase
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center mb-2">ثبت‌نام</h2>
        <input name="phone" type="text" placeholder="شماره موبایل" value={form.phone} onChange={handleChange} className="input" />
        <input name="email" type="email" placeholder="ایمیل" value={form.email} onChange={handleChange} className="input" />
        <input name="username" type="text" placeholder="نام کاربری" value={form.username} onChange={handleChange} className="input" />
        <input name="password" type="password" placeholder="رمز عبور" value={form.password} onChange={handleChange} className="input" />
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        {success && <div className="text-green-600 text-sm text-center">{success}</div>}
        <button type="submit" className="bg-[#1a237e] text-white rounded-lg py-2 font-semibold hover:bg-[#3949ab] transition" disabled={loading}>{loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}</button>
        <div className="text-xs text-center mt-2">حساب دارید؟ <Link href="/auth/login" className="text-[#1a237e] underline">ورود</Link></div>
      </form>
    </div>
  );
}
