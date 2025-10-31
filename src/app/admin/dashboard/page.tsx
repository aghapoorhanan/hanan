'use client'
import React, { useEffect, useState } from "react";
import { createClient, type User } from "@supabase/supabase-js";

const supabaseUrl = "https://gqalshbyurbfbfxfcpas.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxYWxzaGJ5dXJiZmJmeGZjcGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3ODQyNjAsImV4cCI6MjA3MzM2MDI2MH0.1NZatlMNKMS6eqSph2aS7-MRsKJHZTHLGOF3BGTpGxE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError("");
      const { data, error } = await supabase.auth.admin.listUsers();
      if (error) {
        setError("خطا در دریافت کاربران: " + error.message);
        setLoading(false);
        return;
      }
      setUsers(data.users || []);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const total = users.length;
  const active = users.filter((u) => u.confirmed_at).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#1a237e] mb-6">داشبورد ادمین</h1>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-bold text-[#1a237e]">{total}</span>
            <span className="text-[#374151]">کل کاربران</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-bold text-[#43a047]">{active}</span>
            <span className="text-[#374151]">کاربران فعال</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">لیست کاربران</h2>
          {loading ? (
            <div className="text-center text-[#1a237e]">در حال بارگذاری...</div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f3f4f6]">
                  <th className="py-2 px-3">نام کاربری</th>
                  <th className="py-2 px-3">شماره موبایل</th>
                  <th className="py-2 px-3">ایمیل</th>
                  <th className="py-2 px-3">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b last:border-none">
                    <td className="py-2 px-3">{u.user_metadata?.username || "-"}</td>
                    <td className="py-2 px-3">{u.user_metadata?.phone || "-"}</td>
                    <td className="py-2 px-3">{u.email}</td>
                    <td className="py-2 px-3">
                      <span className={u.confirmed_at ? "text-green-600" : "text-red-600"}>
                        {u.confirmed_at ? "فعال" : "غیرفعال"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
