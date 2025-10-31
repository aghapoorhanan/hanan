import { useParams, Link } from 'react-router-dom'

export default function ServiceDetail() {
  const { slug } = useParams()
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-2">جزئیات خدمت: {slug}</h1>
      <p className="text-gray-600 mb-6">توضیحات و قیمتگذاری.</p>
      <Link to="/order" className="bg-gray-900 text-white px-5 py-2 rounded">سفارش دهید</Link>
    </div>
  )
}
