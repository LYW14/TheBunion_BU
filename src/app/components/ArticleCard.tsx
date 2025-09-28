import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../lib/sanity'

interface Article {
  title: string;
  excerpt: string;
  slug: { current: string };
  author: { name: string };
  publishedAt: string | Date;
  mainImage?: any;
}

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <article className="mb-12 border-b-2 border-gray-300 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <Link href={`/posts/${article.slug.current}`}>
              <h1 className="text-3xl lg:text-4xl font-bold font-serif mb-4 leading-tight hover:text-red-600 transition-colors cursor-pointer">
                {article.title}
              </h1>
            </Link>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {article.excerpt}
            </p>
            <div className="flex items-center text-sm text-gray-600">
              <span>By {article.author.name}</span>
              <span className="mx-2">•</span>
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
          <div>
            {article.mainImage && (
              <Image
                src={urlFor(article.mainImage).width(800).height(400).url()}
                alt={article.title}
                width={800}
                height={400}
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
              />
            )}
          </div>
        </div>
      </article>
    )
  }

  // Regular article card
  return (
    <Link href={`/posts/${article.slug.current}`}>
      <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        {article.mainImage && (
          <div className="relative">
            <Image
              src={urlFor(article.mainImage).width(400).height(250).url()}
              alt={article.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="text-lg font-bold font-serif mb-2 leading-tight hover:text-red-600 transition-colors">
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
    </Link>
  )
}