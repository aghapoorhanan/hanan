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
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-primary mb-8 drop-shadow">داشبورد ادمین</h1>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-primary text-secondary rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <span className="text-3xl font-extrabold">{total}</span>
            <span className="text-lg">کل کاربران</span>
          </div>
          <div className="bg-accent text-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <span className="text-3xl font-extrabold">{active}</span>
            <span className="text-lg">کاربران فعال</span>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold mb-4 text-primary">لیست کاربران</h2>
          {loading ? (
            <div className="text-center text-primary">در حال بارگذاری...</div>
          ) : error ? (
            <div className="text-center text-accent">{error}</div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted">
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
                      <span className={u.confirmed_at ? "text-green-600" : "text-accent"}>
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
