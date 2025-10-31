import { Link } from 'react-router-dom'

export default function Shop() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-4">محصولات دیجیتال</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {['poster-1', 'template-2', 'business-card-3'].map((p) => (
          <Link key={p} to={`/product/${p}`} className="bg-white p-5 rounded border">{p}</Link>
        ))}
      </div>
    </div>
  )
}
