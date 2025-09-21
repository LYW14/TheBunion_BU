import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ArticleCard from "@/components/ArticleCard"
import { articles } from "@/lib/sampleData"

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
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* Special Projects */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Special Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}