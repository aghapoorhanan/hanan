export default function Home() {
  return (
    <div className="space-y-12">
      <section className="pt-12 pb-16 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">تبلیغات حرفه‌ای، رشد واقعی برند شما</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">استراتژی، خلاقیت و اجرا برای نتیجه‌ای که اهمیت دارد.</p>
        <div className="flex gap-3 justify-center">
          <a href="/order" className="bg-gray-900 text-white px-5 py-2 rounded">ثبت سفارش رایگان</a>
          <a href="/about" className="border border-gray-300 px-5 py-2 rounded">مشاوره رایگان</a>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">خدمات</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded border">سوشال مدیا</div>
          <div className="bg-white p-5 rounded border">تولید محتوا</div>
          <div className="bg-white p-5 rounded border">طراحی گرافیک</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">نمونه کارها</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white aspect-video rounded border" />
          <div className="bg-white aspect-video rounded border" />
          <div className="bg-white aspect-video rounded border" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">بلاگ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded border">پست جدید ۱</div>
          <div className="bg-white p-5 rounded border">پست جدید ۲</div>
          <div className="bg-white p-5 rounded border">پست جدید ۳</div>
        </div>
      </section>
    </div>
  )
}
