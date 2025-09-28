'use client'
import React from 'react'
import { useState } from 'react'
import ArticleCard from './ArticleCard'
import Pagination from './Pagination'

interface Article {
  _id: string;
  title: string;
  excerpt: string;
  slug: { current: string };
  author: { name: string };
  publishedAt: string;
  // Add other article properties as needed
}

interface ArticleGridProps {
  articles: Article[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 9
  
  const totalPages = Math.ceil(articles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const paginatedArticles = articles.slice(startIndex, startIndex + articlesPerPage)

  return (
    <>
      <section className="mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedArticles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </section>
      
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  )
}