export default function Order() {
  return (
    <div className="py-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">فرم ثبت سفارش</h1>
      <form className="grid gap-4 bg-white p-6 rounded border">
        <input className="border p-2 rounded" placeholder="نام و نام خانوادگی" />
        <input className="border p-2 rounded" placeholder="شماره تماس" />
        <input type="email" className="border p-2 rounded" placeholder="ایمیل" />
        <input className="border p-2 rounded" placeholder="نام شرکت" />
        <input className="border p-2 rounded" placeholder="نوع پروژه" />
        <textarea className="border p-2 rounded" placeholder="توضیحات پروژه" rows={4} />
        <input className="border p-2 rounded" placeholder="بودجه" />
        <input type="date" className="border p-2 rounded" placeholder="تاریخ تحویل" />
        <input type="file" className="border p-2 rounded" />
        <select className="border p-2 rounded">
          <option>روش تماس</option>
          <option>تلفن</option>
          <option>ایمیل</option>
          <option>واتس‌اپ</option>
        </select>
        <button className="bg-gray-900 text-white px-5 py-2 rounded">پرداخت و ثبت</button>
      </form>
    </div>
  )
}
