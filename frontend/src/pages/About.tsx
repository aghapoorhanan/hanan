export default function About() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-4">درباره ما</h1>
      <p className="text-gray-600 mb-6">
        تیمی متخصص در تبلیغات دیجیتال و رشد برندها.
      </p>
      {/* ویدیو درباره ما */}
      <video
        controls
        className="w-full max-w-xl rounded mx-auto mt-8 shadow-lg"
        preload="metadata"
      >
        <source src="/videos/video_2025-09-21_15-53-28.mp4" type="video/mp4" />
        مرورگر شما پشتیبانی نمی‌کند.
      </video>
    </div>
  );
}
