import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-secondary items-center justify-center p-8">
      <header className="mb-10 flex flex-col items-center">
        <Image src="/next.svg" alt="لوگو" width={120} height={40} className="mb-4" />
        <h1 className="text-4xl font-extrabold text-primary mb-2 drop-shadow">کانون تبلیغاتی حنان</h1>
        <p className="text-lg text-gray-700">خلاقیت، کیفیت و اعتماد در تبلیغات</p>
      </header>
      <main className="flex flex-col items-center gap-8 w-full max-w-lg">
        <p className="text-center text-base text-gray-700">
          ارائه خدمات حرفه‌ای تبلیغات، طراحی گرافیک، موشن گرافیک، کمپین‌های تبلیغاتی و مدیریت شبکه‌های اجتماعی
        </p>
        <div className="flex gap-4 w-full justify-center">
          <Link href="/auth/login" className="btn-primary">ورود</Link>
          <Link href="/auth/register" className="btn-secondary">ثبت‌نام</Link>
        </div>
      </main>
      <footer className="mt-16 text-xs text-gray-500">© {new Date().getFullYear()} کانون تبلیغاتی حنان</footer>
    </div>
  );
}
