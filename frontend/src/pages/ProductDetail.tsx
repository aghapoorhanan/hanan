import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { slug } = useParams()
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-2">محصول: {slug}</h1>
      <p className="text-gray-600 mb-6">توضیحات محصول و پیش‌نمایش.</p>
      <button className="bg-gray-900 text-white px-5 py-2 rounded">خرید و دانلود</button>
    </div>
  )
}
