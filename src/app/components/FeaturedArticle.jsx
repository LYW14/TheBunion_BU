import ArticleCard from './ArticleCard'

export default function FeaturedArticle({ article }) {
  if (!article) return null
  
  return (
    <section className="mb-12">
      <ArticleCard article={article} featured={true} />
    </section>
  )
}