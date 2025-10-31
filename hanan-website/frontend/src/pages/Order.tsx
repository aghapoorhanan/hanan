import React from "react";
const Order = () => (
  <div className="font-iran bg-secondary min-h-screen text-right p-8">
    <h2 className="text-2xl font-bold text-primary mb-4">ثبت سفارش</h2>
    <form className="space-y-4 max-w-lg">
      <input className="w-full p-2 rounded border" placeholder="نام و نام خانوادگی" />
      <input className="w-full p-2 rounded border" placeholder="شماره تماس" />
      <input className="w-full p-2 rounded border" placeholder="ایمیل" />
      <input className="w-full p-2 rounded border" placeholder="نام شرکت (اختیاری)" />
      <input className="w-full p-2 rounded border" placeholder="نوع پروژه" />
      <textarea className="w-full p-2 rounded border" placeholder="توضیحات پروژه" />
      <input className="w-full p-2 rounded border" placeholder="بودجه تقریبی" />
      <input className="w-full p-2 rounded border" placeholder="تاریخ تحویل" type="date" />
      <input className="w-full p-2 rounded border" type="file" />
      <button className="btn btn-accent w-full">ثبت سفارش</button>
    </form>
  </div>
);
export default Order;
