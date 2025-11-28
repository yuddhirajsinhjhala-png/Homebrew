"use client";

import { useState, useEffect } from "react";
import { Beer, Calendar, User, Tag, Plus } from "lucide-react";
import useUser from "@/utils/useUser";

export default function BlogsPage() {
  const { data: user, loading: userLoading } = useUser();
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [showNewBlogForm, setShowNewBlogForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "Beginner Tips",
    image_url: "",
  });

  const categories = [
    "all",
    "Beginner Tips",
    "Ingredients",
    "Advanced Techniques",
    "Troubleshooting",
    "Techniques",
  ];

  useEffect(() => {
    fetchBlogs();
  }, [selectedCategory]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const url =
        selectedCategory === "all"
          ? "/api/blogs"
          : `/api/blogs?category=${encodeURIComponent(selectedCategory)}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      setBlogs(data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is authenticated before creating blog
    if (!user) {
      alert("You must be signed in to create blog posts");
      return;
    }

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create blog");
      }

      setFormData({
        title: "",
        excerpt: "",
        content: "",
        author: "",
        category: "Beginner Tips",
        image_url: "",
      });
      setShowNewBlogForm(false);
      fetchBlogs();
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog post");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header */}
      <header className="bg-[#2C1810] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Beer size={32} className="text-[#F59E0B]" />
              <h1 className="text-2xl md:text-3xl font-bold font-merriweather">
                BrewMaster Home
              </h1>
            </div>
            <nav className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
              <a href="/" className="hover:text-[#F59E0B] transition-colors">
                Home
              </a>
              <a
                href="/brewing-guides"
                className="hover:text-[#F59E0B] transition-colors"
              >
                Brewing Guides
              </a>
              <a
                href="/equipment"
                className="hover:text-[#F59E0B] transition-colors"
              >
                Equipment
              </a>
              <a
                href="/blogs"
                className="hover:text-[#F59E0B] transition-colors font-semibold"
              >
                Blog
              </a>
              <a
                href="/book-course"
                className="hover:text-[#F59E0B] transition-colors"
              >
                Book Course
              </a>
              {user && (
                <a
                  href="/admin"
                  className="hover:text-[#F59E0B] transition-colors"
                >
                  Admin
                </a>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2C1810] to-[#4A2C1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-merriweather">
                Brewing Blog
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl">
                Tips, techniques, and stories from the homebrewing community
              </p>
            </div>
            {user && (
              <button
                onClick={() => setShowNewBlogForm(!showNewBlogForm)}
                className="bg-[#F59E0B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D97706] transition-colors flex items-center gap-2 self-start md:self-center"
              >
                <Plus size={20} />
                New Blog Post
              </button>
            )}
          </div>
        </div>
      </section>

      {/* New Blog Form - Only show if user is authenticated */}
      {showNewBlogForm && user && (
        <section className="py-8 bg-white border-b-2 border-[#F59E0B]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-[#2C1810] mb-6">
              Create New Blog Post
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                  Excerpt
                </label>
                <input
                  type="text"
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                  Content
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] h-64"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    {categories
                      .filter((c) => c !== "all")
                      .map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                  Image URL (optional)
                </label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) =>
                    setFormData({ ...formData, image_url: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-[#F59E0B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D97706] transition-colors"
                >
                  Publish Post
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewBlogForm(false)}
                  className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-[#F59E0B] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category === "all" ? "All Posts" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading blog posts...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No blog posts found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <a
                  key={blog.id}
                  href={`/blogs/${blog.slug}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {blog.image_url && (
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag size={16} className="text-[#F59E0B]" />
                      <span className="text-sm text-[#F59E0B] font-semibold">
                        {blog.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2C1810] mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{formatDate(blog.published_at)}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
