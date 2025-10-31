export default function AdminPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-4">داشبورد مدیریت</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded border">درآمد کل</div>
        <div className="bg-white p-5 rounded border">تبلیغات فعال</div>
        <div className="bg-white p-5 rounded border">پرداخت‌های افیلیت</div>
      </div>
    </div>
  )
}
