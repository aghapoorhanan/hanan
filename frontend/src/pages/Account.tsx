export default function Account() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-4">داشبورد کاربری</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded border">سفارش‌ها</div>
        <div className="bg-white p-5 rounded border">دانلودها</div>
        <div className="bg-white p-5 rounded border">فاکتورها</div>
      </div>
    </div>
  )
}
