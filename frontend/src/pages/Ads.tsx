export default function Ads() {
  return (
    <div className="py-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">تبلیغ در سایت ما</h1>
      <form className="grid gap-4 bg-white p-6 rounded border">
        <input className="border p-2 rounded" placeholder="نام" />
        <input className="border p-2 rounded" placeholder="ایمیل" />
        <select className="border p-2 rounded"><option>انتخاب جایگاه</option></select>
        <input type="date" className="border p-2 rounded" />
        <input type="date" className="border p-2 rounded" />
        <button className="bg-gray-900 text-white px-5 py-2 rounded">رزرو و پرداخت</button>
      </form>
    </div>
  )
}
