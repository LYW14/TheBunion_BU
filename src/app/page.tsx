import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import ArticleCard from "@/app/components/ArticleCard"
import { articles } from "@/app/lib/sampleData"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Featured Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured News</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map(article => (
              <ArticleCard
                key={
                  typeof article.slug === "string"
                    ? article.slug
                    : (article.slug && typeof article.slug === "object" && "current" in article.slug
                        ? (article.slug as { current: string }).current
                        : "")
                }
                article={{
                  ...article,
                  slug: typeof article.slug === "string" ? { current: article.slug } : article.slug,
                  author: typeof article.author === "string" ? { name: article.author } : article.author
                }}
              />
            ))}
          </div>
        </section>

        {/* Special Projects */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Special Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard
                key={
                  typeof article.slug === "string"
                    ? article.slug
                    : (article.slug && typeof article.slug === "object" && "current" in article.slug
                        ? (article.slug as { current: string }).current
                        : "")
                }
                article={{
                  ...article,
                  slug: typeof article.slug === "string" ? { current: article.slug } : article.slug,
                  author: typeof article.author === "string" ? { name: article.author } : article.author
                }}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}