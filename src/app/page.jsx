import {
  Beer,
  BookOpen,
  ShoppingCart,
  Calendar,
  Droplet,
  Thermometer,
  FlaskConical,
} from "lucide-react";

export default function HomePage() {
  const beerTypes = [
    {
      name: "IPA (India Pale Ale)",
      description: "Hoppy, bitter, and aromatic with citrus and pine notes",
      difficulty: "Intermediate",
      time: "4-6 weeks",
      image:
        "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&q=80",
    },
    {
      name: "Stout",
      description: "Dark, rich, and creamy with coffee and chocolate flavors",
      difficulty: "Intermediate",
      time: "6-8 weeks",
      image:
        "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80",
    },
    {
      name: "Pale Ale",
      description: "Balanced malt and hop character, perfect for beginners",
      difficulty: "Beginner",
      time: "3-4 weeks",
      image:
        "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=800&q=80",
    },
    {
      name: "Wheat Beer",
      description: "Light, refreshing with banana and clove notes",
      difficulty: "Beginner",
      time: "3-4 weeks",
      image:
        "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=800&q=80",
    },
    {
      name: "Lager",
      description: "Crisp, clean, and refreshing classic beer style",
      difficulty: "Advanced",
      time: "6-10 weeks",
      image:
        "https://images.unsplash.com/photo-1608434780680-d2e4c0e0c0e0?w=800&q=80",
    },
    {
      name: "Belgian Ale",
      description: "Complex, fruity, and spicy with unique yeast character",
      difficulty: "Advanced",
      time: "5-8 weeks",
      image:
        "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=800&q=80",
    },
  ];

  const brewingSteps = [
    {
      icon: FlaskConical,
      title: "Mashing",
      description: "Convert starches to fermentable sugars",
    },
    {
      icon: Thermometer,
      title: "Boiling",
      description: "Add hops and sterilize the wort",
    },
    {
      icon: Droplet,
      title: "Fermentation",
      description: "Yeast converts sugars to alcohol",
    },
    {
      icon: Beer,
      title: "Bottling",
      description: "Package and carbonate your beer",
    },
  ];

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
              <a
                href="/"
                className="hover:text-[#F59E0B] transition-colors font-semibold"
              >
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
              <a
                href="/admin"
                className="hover:text-[#F59E0B] transition-colors text-xs opacity-75"
              >
                Admin
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C1810] to-[#4A2C1A] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-merriweather">
              Craft Your Perfect Brew at Home
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Master the art of home brewing with our comprehensive guides,
              expert tips, and online courses. From your first batch to advanced
              techniques, we'll help you brew exceptional beer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/book-course"
                className="bg-[#F59E0B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#D97706] transition-colors text-center"
              >
                Book Online Course
              </a>
              <a
                href="/brewing-guides"
                className="bg-white text-[#2C1810] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore Guides
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brewing Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2C1810] font-merriweather">
            The Brewing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brewingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#F59E0B] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#2C1810]">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beer Types */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#2C1810] font-merriweather">
            Beer Styles You Can Brew
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore different beer styles and find the perfect recipe for your
            taste and skill level
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beerTypes.map((beer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={beer.image}
                  alt={beer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#2C1810]">
                    {beer.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{beer.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="bg-[#F59E0B] text-white px-3 py-1 rounded-full">
                      {beer.difficulty}
                    </span>
                    <span className="text-gray-500">{beer.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/brewing-guides"
              className="bg-[#2C1810] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a0f0a] transition-colors inline-block"
            >
              View All Brewing Guides
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#FFF8F0] rounded-lg">
              <Calendar size={48} className="text-[#F59E0B] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#2C1810]">
                Online Courses
              </h3>
              <p className="text-gray-600 mb-4">
                Learn from expert brewers with our comprehensive online courses.
                Live sessions and recorded content available.
              </p>
              <a
                href="/book-course"
                className="text-[#F59E0B] font-semibold hover:underline"
              >
                Book a Course →
              </a>
            </div>
            <div className="text-center p-8 bg-[#FFF8F0] rounded-lg">
              <ShoppingCart size={48} className="text-[#F59E0B] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#2C1810]">
                Equipment Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Find the best brewing equipment with our curated recommendations
                and affiliate links for easy purchasing.
              </p>
              <a
                href="/equipment"
                className="text-[#F59E0B] font-semibold hover:underline"
              >
                Shop Equipment →
              </a>
            </div>
            <div className="text-center p-8 bg-[#FFF8F0] rounded-lg">
              <BookOpen size={48} className="text-[#F59E0B] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#2C1810]">
                Brewing Blog
              </h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest tips, recipes, and brewing
                techniques from our community of home brewers.
              </p>
              <a
                href="/blogs"
                className="text-[#F59E0B] font-semibold hover:underline"
              >
                Read Blog →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Beer size={24} className="text-[#F59E0B]" />
                <span className="font-bold text-xl">BrewMaster Home</span>
              </div>
              <p className="text-gray-400">
                Your complete guide to brewing exceptional beer at home.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="/brewing-guides"
                  className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                >
                  Brewing Guides
                </a>
                <a
                  href="/equipment"
                  className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                >
                  Equipment
                </a>
                <a
                  href="/blogs"
                  className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                >
                  Blog
                </a>
                <a
                  href="/book-course"
                  className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                >
                  Book Course
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">
                Questions about brewing?
                <br />
                Reach out to our community!
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BrewMaster Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
