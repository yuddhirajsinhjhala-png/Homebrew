"use client";

import { useState, useEffect } from "react";
import { Beer, Calendar, User, Tag, ArrowLeft } from "lucide-react";

export default function BlogPostPage({ params }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/blogs/${params.slug}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog");
      }
      const data = await response.json();
      setBlog(data.blog);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
        <p className="text-gray-600">Blog post not found</p>
      </div>
    );
  }

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
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blogs"
            className="flex items-center gap-2 text-[#F59E0B] hover:underline mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </a>

          {blog.image_url && (
            <img
              src={blog.image_url}
              alt={blog.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
          )}

          <div className="flex items-center gap-2 mb-4">
            <Tag size={20} className="text-[#F59E0B]" />
            <span className="text-[#F59E0B] font-semibold">
              {blog.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-6 font-merriweather">
            {blog.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-300">
            <div className="flex items-center gap-2">
              <User size={20} />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>{formatDate(blog.published_at)}</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {blog.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300">
            <a
              href="/blogs"
              className="bg-[#F59E0B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D97706] transition-colors inline-block"
            >
              Read More Articles
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
