"use client";

import { useState, useEffect } from "react";
import {
  Beer,
  Users,
  FileText,
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  LogOut,
} from "lucide-react";
import useUser from "@/utils/useUser";

export default function AdminPage() {
  const { data: user, loading: userLoading } = useUser();
  const [courseBookings, setCourseBookings] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("bookings");

  // Redirect to signin if not authenticated
  useEffect(() => {
    if (!userLoading && !user) {
      window.location.href = "/account/signin";
    }
  }, [user, userLoading]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  // Show loading while checking authentication
  if (userLoading) {
    return (
      <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  // Show nothing while redirecting
  if (!user) {
    return null;
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const [bookingsRes, blogsRes] = await Promise.all([
        fetch("/api/course-bookings"),
        fetch("/api/blogs"),
      ]);

      const bookingsData = await bookingsRes.json();
      const blogsData = await blogsRes.json();

      setCourseBookings(bookingsData.bookings || []);
      setBlogs(blogsData.blogs || []);
    } catch (error) {
      console.error("Error fetching data:", error);
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
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getCourseDisplayName = (courseId) => {
    const courseNames = {
      beginner: "Beginner Brewing Fundamentals",
      intermediate: "Intermediate All-Grain Brewing",
      advanced: "Advanced Brewing Mastery",
    };
    return courseNames[courseId] || courseId;
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header */}
      <header className="bg-[#2C1810] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Beer size={32} className="text-[#F59E0B]" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold font-merriweather">
                  BrewMaster Admin
                </h1>
                <p className="text-sm text-gray-300">
                  Welcome, {user.name || user.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
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
                  className="hover:text-[#F59E0B] transition-colors"
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
              <a
                href="/account/logout"
                className="flex items-center gap-2 bg-[#F59E0B] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#D97706] transition-colors"
              >
                <LogOut size={16} />
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-300 mb-8">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("bookings")}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeTab === "bookings"
                  ? "text-[#F59E0B] border-b-2 border-[#F59E0B]"
                  : "text-gray-600 hover:text-[#F59E0B]"
              }`}
            >
              <div className="flex items-center gap-2">
                <Users size={20} />
                Course Bookings ({courseBookings.length})
              </div>
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeTab === "blogs"
                  ? "text-[#F59E0B] border-b-2 border-[#F59E0B]"
                  : "text-gray-600 hover:text-[#F59E0B]"
              }`}
            >
              <div className="flex items-center gap-2">
                <FileText size={20} />
                Blog Posts ({blogs.length})
              </div>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading data...</p>
          </div>
        ) : (
          <>
            {/* Course Bookings Tab */}
            {activeTab === "bookings" && (
              <div>
                <h2 className="text-3xl font-bold text-[#2C1810] mb-6 font-merriweather">
                  Course Bookings
                </h2>
                {courseBookings.length === 0 ? (
                  <p className="text-gray-600">No course bookings yet.</p>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {courseBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#F59E0B]"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-xl font-bold text-[#2C1810] mb-3">
                              {booking.name}
                            </h3>
                            <div className="space-y-2 text-gray-600">
                              <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>{booking.email}</span>
                              </div>
                              {booking.phone && (
                                <div className="flex items-center gap-2">
                                  <Phone size={16} />
                                  <span>{booking.phone}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>
                                  Submitted: {formatDate(booking.created_at)}
                                </span>
                              </div>
                              {booking.preferred_date && (
                                <div className="flex items-center gap-2">
                                  <Calendar size={16} />
                                  <span>
                                    Preferred Start:{" "}
                                    {new Date(
                                      booking.preferred_date,
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="bg-[#FFF8F0] rounded-lg p-4">
                              <h4 className="font-semibold text-[#2C1810] mb-2">
                                Course: {getCourseDisplayName(booking.course)}
                              </h4>
                              {booking.message && (
                                <div className="mt-3">
                                  <div className="flex items-start gap-2 text-gray-600">
                                    <MessageSquare
                                      size={16}
                                      className="mt-1 flex-shrink-0"
                                    />
                                    <span className="text-sm">
                                      {booking.message}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Blog Posts Tab */}
            {activeTab === "blogs" && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <h2 className="text-3xl font-bold text-[#2C1810] font-merriweather">
                    Blog Posts
                  </h2>
                  <a
                    href="/blogs"
                    className="bg-[#F59E0B] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#D97706] transition-colors self-start sm:self-center"
                  >
                    Add New Blog Post
                  </a>
                </div>
                {blogs.length === 0 ? (
                  <p className="text-gray-600">No blog posts yet.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                      <div
                        key={blog.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                      >
                        {blog.image_url && (
                          <img
                            src={blog.image_url}
                            alt={blog.title}
                            className="w-full h-48 object-cover"
                          />
                        )}
                        <div className="p-4">
                          <span className="text-sm text-[#F59E0B] font-semibold">
                            {blog.category}
                          </span>
                          <h3 className="text-lg font-bold text-[#2C1810] mb-2">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {blog.excerpt}
                          </p>
                          <div className="text-xs text-gray-500">
                            <p>By {blog.author}</p>
                            <p>{formatDate(blog.published_at)}</p>
                          </div>
                          <a
                            href={`/blogs/${blog.slug}`}
                            className="inline-block mt-3 text-[#F59E0B] font-semibold hover:underline"
                          >
                            View Post →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
