import Link from "next/link"

export default function ArticleCard({ article }) {
  return (
    <Link href={`/posts/${article.slug}`} className="group block">
      <div className="aspect-video bg-gray-200 mb-3 overflow-hidden rounded-lg">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <h3 className="font-semibold text-lg group-hover:underline">{article.title}</h3>
      <p className="text-sm text-gray-600">{article.excerpt}</p>
    </Link>
  )
}
