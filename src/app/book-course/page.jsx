"use client";

import { useState } from "react";
import { Beer, Calendar, Clock, Users, Video, CheckCircle } from "lucide-react";

export default function BookCoursePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "beginner",
    preferredDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    {
      id: "beginner",
      name: "Beginner Brewing Fundamentals",
      duration: "4 weeks",
      sessions: "8 live sessions",
      price: "$199",
      description:
        "Perfect for those new to homebrewing. Learn the basics of brewing, equipment, ingredients, and techniques.",
      includes: [
        "Live online sessions with expert brewers",
        "Recorded sessions for review",
        "Starter equipment recommendations",
        "Recipe kits for your first 3 batches",
        "Private community access",
        "Certificate of completion",
      ],
    },
    {
      id: "intermediate",
      name: "Intermediate All-Grain Brewing",
      duration: "6 weeks",
      sessions: "12 live sessions",
      price: "$299",
      description:
        "Take your brewing to the next level with all-grain techniques, water chemistry, and recipe formulation.",
      includes: [
        "Advanced brewing techniques",
        "Water chemistry deep dive",
        "Recipe formulation workshop",
        "Yeast management and propagation",
        "Troubleshooting common issues",
        "Certificate of completion",
      ],
    },
    {
      id: "advanced",
      name: "Advanced Brewing Mastery",
      duration: "8 weeks",
      sessions: "16 live sessions",
      price: "$399",
      description:
        "Master advanced techniques including sour beers, barrel aging, and commercial-level quality control.",
      includes: [
        "Sour beer and wild fermentation",
        "Barrel aging techniques",
        "Advanced hop utilization",
        "Quality control and sensory analysis",
        "Commercial brewing insights",
        "Certificate of completion",
      ],
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/course-bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit course booking");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting course booking:", error);
      alert("Failed to submit course booking. Please try again.");
    }
  };

  const selectedCourse = courses.find((c) => c.id === formData.course);

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
                className="hover:text-[#F59E0B] transition-colors"
              >
                Blog
              </a>
              <a
                href="/book-course"
                className="hover:text-[#F59E0B] transition-colors font-semibold"
              >
                Book Course
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2C1810] to-[#4A2C1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-merriweather">
            Online Brewing Courses
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl">
            Learn from expert brewers with live online sessions, hands-on
            projects, and personalized feedback
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-[#2C1810] mb-12 text-center font-merriweather">
            Choose Your Course
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#F59E0B] text-white p-6">
                  <h4 className="text-2xl font-bold mb-2">{course.name}</h4>
                  <div className="text-3xl font-bold">{course.price}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Video size={16} />
                      <span>{course.sessions}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-[#2C1810]">
                      What's Included:
                    </h5>
                    {course.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle
                          size={16}
                          className="text-[#F59E0B] mt-1 flex-shrink-0"
                        />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle
                  size={64}
                  className="text-[#F59E0B] mx-auto mb-4"
                />
                <h3 className="text-3xl font-bold text-[#2C1810] mb-4">
                  Booking Received!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in our brewing courses. We'll
                  contact you within 24 hours to confirm your booking and
                  provide payment details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#F59E0B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D97706] transition-colors"
                >
                  Book Another Course
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-bold text-[#2C1810] mb-6 font-merriweather">
                  Book Your Course
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredDate: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                      Select Course *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                    >
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name} - {course.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedCourse && (
                    <div className="bg-[#FFF8F0] p-4 rounded-lg">
                      <h4 className="font-semibold text-[#2C1810] mb-2">
                        Selected Course Details:
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Duration:</strong> {selectedCourse.duration}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Sessions:</strong> {selectedCourse.sessions}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Price:</strong> {selectedCourse.price}
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-[#2C1810] mb-2">
                      Additional Information
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] h-32"
                      placeholder="Tell us about your brewing experience or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F59E0B] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#D97706] transition-colors text-lg"
                  >
                    Submit Booking Request
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * We'll contact you to confirm your booking and arrange
                    payment
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-[#2C1810] mb-12 text-center font-merriweather">
            Why Choose Our Courses?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users size={48} className="text-[#F59E0B] mx-auto mb-4" />
              <h4 className="text-xl font-bold text-[#2C1810] mb-3">
                Expert Instructors
              </h4>
              <p className="text-gray-600">
                Learn from award-winning brewers with decades of combined
                experience in homebrewing and commercial brewing.
              </p>
            </div>
            <div className="text-center">
              <Video size={48} className="text-[#F59E0B] mx-auto mb-4" />
              <h4 className="text-xl font-bold text-[#2C1810] mb-3">
                Live & Recorded
              </h4>
              <p className="text-gray-600">
                Attend live sessions for real-time interaction, plus access
                recorded content to review at your own pace.
              </p>
            </div>
            <div className="text-center">
              <Calendar size={48} className="text-[#F59E0B] mx-auto mb-4" />
              <h4 className="text-xl font-bold text-[#2C1810] mb-3">
                Flexible Schedule
              </h4>
              <p className="text-gray-600">
                Courses run multiple times per year with evening and weekend
                options to fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
