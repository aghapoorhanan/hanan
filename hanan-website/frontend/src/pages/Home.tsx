import React from "react";
const Home = () => (
  <div className="font-iran bg-secondary min-h-screen text-right">
    <header className="bg-primary text-white p-6 rounded-b-3xl shadow-lg">
      <h1 className="text-3xl font-bold">تبلیغات حرفه‌ای، رشد واقعی برند شما</h1>
      <p className="mt-2">کانون تبلیغاتی حنان</p>
      <div className="mt-4 flex gap-4">
        <a href="/order" className="btn btn-accent">ثبت سفارش رایگان</a>
        <a href="/contact" className="btn btn-outline">مشاوره رایگان</a>
      </div>
    </header>
    {/* سایر بخش‌ها: خدمات، نمونه کار، قیمت، بلاگ، تماس و ... */}
  </div>
);
export default Home;
