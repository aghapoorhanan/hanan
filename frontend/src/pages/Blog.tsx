import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-4">بلاگ</h1>
      <div className="space-y-3">
        {['first-post', 'marketing-tips', 'seo-basics'].map((s) => (
          <Link key={s} to={`/blog/${s}`} className="block bg-white p-5 rounded border">{s}</Link>
        ))}
      </div>
    </div>
  )
}
