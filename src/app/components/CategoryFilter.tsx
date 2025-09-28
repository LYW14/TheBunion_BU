'use client'
import { useState } from 'react'

const categories = ["All", "Campus Life", "Academics", "Sports", "Dining", "Local"]

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void;
}

export default function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange?.(category)
  }

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}