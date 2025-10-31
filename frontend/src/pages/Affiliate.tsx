export default function Affiliate() {
  return (
    <div className="py-10 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-bold mb-3">ثبت‌نام افیلیت</h2>
        <form className="grid gap-3 bg-white p-5 rounded border">
          <input className="border p-2 rounded" placeholder="ایمیل" />
          <input className="border p-2 rounded" placeholder="روش پرداخت" />
          <button className="bg-gray-900 text-white px-5 py-2 rounded">ثبت‌نام</button>
        </form>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-3">ورود</h2>
        <form className="grid gap-3 bg-white p-5 rounded border">
          <input className="border p-2 rounded" placeholder="ایمیل" />
          <input type="password" className="border p-2 rounded" placeholder="رمز عبور" />
          <button className="bg-gray-900 text-white px-5 py-2 rounded">ورود</button>
        </form>
      </div>
    </div>
  )
}
