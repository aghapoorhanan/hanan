import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams()
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-2">پست: {slug}</h1>
      <article className="prose prose-slate max-w-none bg-white p-5 rounded border">
        <p>محتوای پست اینجا نمایش داده می‌شود.</p>
      </article>
    </div>
  )
}
