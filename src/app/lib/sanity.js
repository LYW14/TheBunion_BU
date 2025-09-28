// src/lib/sanity.js - Clean placeholder version

// Placeholder data for development
const placeholderArticles = [
  {
    _id: "1",
    title: "Local Student Discovers Revolutionary New Way to Procrastinate",
    slug: { current: "procrastination-discovery" },
    excerpt: "In a shocking turn of events, BU sophomore Jake Martinez has reportedly discovered that doing homework can be an extremely effective form of procrastination.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop"
      },
      alt: "Student studying"
    },
    author: { name: "Sarah Johnson", slug: { current: "sarah-johnson" } },
    categories: [{ title: "Campus Life", slug: { current: "campus-life" } }],
    publishedAt: "2025-09-20T10:00:00Z",
    featured: true
  },
  {
    _id: "2",
    title: "BU Dining Hall Allegedly Serves Food That Resembles Food",
    slug: { current: "dining-hall-food" },
    excerpt: "Students report shocking discovery that mystery meat might actually be edible protein.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop"
      },
      alt: "Dining hall food"
    },
    author: { name: "Mike Chen", slug: { current: "mike-chen" } },
    categories: [{ title: "Dining", slug: { current: "dining" } }],
    publishedAt: "2025-09-19T10:00:00Z",
    featured: false
  },
  {
    _id: "3",
    title: "Green Line Train Spotted Moving at Nearly Walking Speed",
    slug: { current: "green-line-speed" },
    excerpt: "Commuters celebrate historic achievement as T train reaches unprecedented velocity of 3 mph.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop"
      },
      alt: "MBTA train"
    },
    author: { name: "Emma Rodriguez", slug: { current: "emma-rodriguez" } },
    categories: [{ title: "Local", slug: { current: "local" } }],
    publishedAt: "2025-09-18T10:00:00Z",
    featured: false
  },
  {
    _id: "4",
    title: "Study Abroad Student Returns with Personality Entirely Based on Trip",
    slug: { current: "study-abroad-personality" },
    excerpt: "Friends report classmate now exclusively communicates in broken Italian and stories about 'this little café in Tuscany.'",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=400&h=250&fit=crop"
      },
      alt: "Travel abroad"
    },
    author: { name: "David Park", slug: { current: "david-park" } },
    categories: [{ title: "Campus Life", slug: { current: "campus-life" } }],
    publishedAt: "2025-09-17T10:00:00Z",
    featured: false
  },
  {
    _id: "5",
    title: "Local Professor Assigns Reading That's Actually Relevant to Class",
    slug: { current: "relevant-reading" },
    excerpt: "Students express confusion and concern as assigned material directly relates to course content.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
      },
      alt: "Books and reading"
    },
    author: { name: "Jessica Wong", slug: { current: "jessica-wong" } },
    categories: [{ title: "Academics", slug: { current: "academics" } }],
    publishedAt: "2025-09-16T10:00:00Z",
    featured: false
  }
]

// Mock client functions
export const client = {
  fetch: async (query) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))
    
    if (query.includes('featured == true')) {
      return placeholderArticles.find(article => article.featured)
    }
    
    return placeholderArticles
  }
}

// Simple image URL function for placeholder images
export function urlFor(source) {
  return {
    width: (w) => ({ height: (h) => ({ url: () => source?.asset?.url || '' }) }),
    height: (h) => ({ width: (w) => ({ url: () => source?.asset?.url || '' }) }),
    url: () => source?.asset?.url || ''
  }
}

// Helper functions that return placeholder data
export async function getAllArticles() {
  return placeholderArticles
}

export async function getFeaturedArticle() {
  return placeholderArticles.find(article => article.featured)
}

export async function getArticlesByCategory(category) {
  return placeholderArticles.filter(article => 
    article.categories.some(cat => cat.title.toLowerCase().includes(category.toLowerCase()))
  )
}