import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-4">لیست خدمات</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {['social', 'content', 'design'].map((s) => (
          <Link key={s} to={`/services/${s}`} className="bg-white p-5 rounded border">خدمت {s}</Link>
        ))}
      </div>
    </div>
  )
}
