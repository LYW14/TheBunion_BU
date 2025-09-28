// src/app/articles/page.jsx
import { getAllArticles } from '../lib/sanity'

// Simple ArticleCard component (inline for now)
function ArticleCard({ article, featured = false }) {
  if (featured) {
    return (
      <article className="mb-12 border-b-2 border-gray-300 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span className="mr-4">{article.categories[0]?.title}</span>
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold font-serif mb-4 leading-tight hover:text-red-600 transition-colors cursor-pointer">
              {article.title}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {article.excerpt}
            </p>
            <div className="flex items-center text-sm text-gray-600">
              <span>By {article.author.name}</span>
            </div>
          </div>
          <div>
            {article.mainImage && (
              <img
                src={article.mainImage.asset.url}
                alt={article.mainImage.alt || article.title}
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
              />
            )}
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      {article.mainImage && (
        <div className="relative">
          <img
            src={article.mainImage.asset.url}
            alt={article.mainImage.alt || article.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-red-600 text-white px-2 py-1 text-xs font-medium rounded">
              {article.categories[0]?.title}
            </span>
          </div>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold font-serif mb-2 leading-tight hover:text-red-600 transition-colors cursor-pointer line-clamp-3">
          {article.title}
        </h2>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{article.author.name}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </article>
  )
}

async function getArticles() {
  const articles = await getAllArticles()
  const featuredArticle = articles.find(article => article.featured) || articles[0]
  const otherArticles = articles.filter(article => article._id !== featuredArticle?._id)
  
  return { featuredArticle, otherArticles }
}

export default async function ArticlesPage() {
  const { featuredArticle, otherArticles } = await getArticles()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">Articles</h1>
          <p className="text-center text-gray-600">The latest satirical news from campus and beyond</p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="mb-12">
            <ArticleCard article={featuredArticle} featured={true} />
          </section>
        )}

        {/* Articles Grid */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}