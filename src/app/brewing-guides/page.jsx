import { Beer, Clock, TrendingUp, ChevronRight } from "lucide-react";

export default function BrewingGuidesPage() {
  const guides = [
    {
      id: "ipa",
      name: "India Pale Ale (IPA)",
      difficulty: "Intermediate",
      time: "4-6 weeks",
      abv: "5.5-7.5%",
      description:
        "Learn to brew the hoppy, aromatic beer that started the craft beer revolution.",
      ingredients: [
        "10 lbs Pale Malt",
        "1 lb Crystal Malt (60L)",
        "2 oz Cascade Hops (bittering)",
        "2 oz Centennial Hops (flavor)",
        "2 oz Citra Hops (aroma)",
        "American Ale Yeast",
      ],
      steps: [
        "Heat 4 gallons of water to 165°F",
        "Add grains and maintain 152°F for 60 minutes (mashing)",
        "Sparge with 3 gallons of 170°F water",
        "Bring wort to boil, add bittering hops",
        "Add flavor hops at 15 minutes remaining",
        "Add aroma hops at flame out",
        "Cool to 68°F and transfer to fermenter",
        "Pitch yeast and ferment for 2 weeks at 68°F",
        "Dry hop for 5-7 days",
        "Bottle or keg and carbonate",
      ],
      tips: [
        "Use fresh hops for best aroma",
        "Control fermentation temperature strictly",
        "Don't skip the dry hopping step",
        "Consider water chemistry - IPAs love sulfate",
      ],
    },
    {
      id: "stout",
      name: "Irish Stout",
      difficulty: "Intermediate",
      time: "6-8 weeks",
      abv: "4.0-5.0%",
      description:
        "Master the dark, creamy classic with roasted flavors and a smooth finish.",
      ingredients: [
        "8 lbs Pale Malt",
        "1.5 lbs Flaked Barley",
        "1 lb Roasted Barley",
        "0.5 lb Chocolate Malt",
        "1.5 oz East Kent Goldings Hops",
        "Irish Ale Yeast",
      ],
      steps: [
        "Heat 3.5 gallons of water to 165°F",
        "Add grains and maintain 154°F for 60 minutes",
        "Sparge with 3 gallons of 170°F water",
        "Boil for 90 minutes, add hops at start",
        "Cool to 65°F and transfer to fermenter",
        "Pitch yeast and ferment for 2 weeks at 65°F",
        "Condition for 2-4 weeks",
        "Serve on nitro for authentic experience",
      ],
      tips: [
        "Roasted barley gives the signature flavor",
        "Lower carbonation than most beers",
        "Serve at 50-55°F for best flavor",
        "Nitrogen tap creates the creamy head",
      ],
    },
    {
      id: "pale-ale",
      name: "American Pale Ale",
      difficulty: "Beginner",
      time: "3-4 weeks",
      abv: "4.5-6.0%",
      description: "Perfect starter beer with balanced malt and hop character.",
      ingredients: [
        "9 lbs Pale Malt",
        "0.5 lb Crystal Malt (40L)",
        "1.5 oz Cascade Hops (bittering)",
        "1 oz Cascade Hops (flavor)",
        "1 oz Cascade Hops (aroma)",
        "American Ale Yeast",
      ],
      steps: [
        "Heat 3.5 gallons of water to 165°F",
        "Add grains and maintain 152°F for 60 minutes",
        "Sparge with 2.5 gallons of 170°F water",
        "Boil for 60 minutes, add bittering hops at start",
        "Add flavor hops at 15 minutes remaining",
        "Add aroma hops at flame out",
        "Cool to 68°F and transfer to fermenter",
        "Pitch yeast and ferment for 10-14 days",
        "Bottle or keg and carbonate for 2 weeks",
      ],
      tips: [
        "Great first all-grain recipe",
        "Cascade hops give classic citrus notes",
        "Easy to scale up or down",
        "Forgiving fermentation temperature range",
      ],
    },
    {
      id: "wheat",
      name: "Hefeweizen (Wheat Beer)",
      difficulty: "Beginner",
      time: "3-4 weeks",
      abv: "4.5-5.5%",
      description:
        "Light, refreshing German wheat beer with banana and clove notes.",
      ingredients: [
        "5 lbs Wheat Malt",
        "4 lbs Pilsner Malt",
        "1 oz Hallertau Hops",
        "German Wheat Beer Yeast",
      ],
      steps: [
        "Heat 3 gallons of water to 165°F",
        "Add grains and maintain 152°F for 60 minutes",
        "Sparge with 2.5 gallons of 170°F water",
        "Boil for 60 minutes, add hops at start",
        "Cool to 65°F and transfer to fermenter",
        "Pitch yeast and ferment for 10-14 days at 65-68°F",
        "Bottle condition for 2 weeks",
        "Serve slightly cloudy with lemon wedge",
      ],
      tips: [
        "Yeast creates the signature banana/clove flavors",
        "Higher fermentation temps increase banana notes",
        "Traditionally served unfiltered",
        "Use at least 50% wheat malt",
      ],
    },
    {
      id: "lager",
      name: "Czech Pilsner",
      difficulty: "Advanced",
      time: "6-10 weeks",
      abv: "4.0-5.5%",
      description:
        "Crisp, clean lager requiring temperature control and patience.",
      ingredients: [
        "9 lbs Pilsner Malt",
        "0.5 lb CaraPils",
        "1.5 oz Saaz Hops (bittering)",
        "1 oz Saaz Hops (flavor)",
        "1 oz Saaz Hops (aroma)",
        "Czech Lager Yeast",
      ],
      steps: [
        "Heat 3.5 gallons of water to 165°F",
        "Add grains and maintain 150°F for 90 minutes",
        "Sparge with 3 gallons of 170°F water",
        "Boil for 90 minutes, add bittering hops at start",
        "Add flavor hops at 30 minutes remaining",
        "Add aroma hops at 5 minutes remaining",
        "Cool to 50°F and transfer to fermenter",
        "Pitch yeast and ferment for 2 weeks at 50°F",
        "Lager at 35°F for 4-6 weeks",
        "Carbonate and serve cold",
      ],
      tips: [
        "Temperature control is critical",
        "Longer lagering improves clarity and flavor",
        "Soft water preferred",
        "Worth the wait for crisp, clean taste",
      ],
    },
    {
      id: "belgian",
      name: "Belgian Blonde Ale",
      difficulty: "Advanced",
      time: "5-8 weeks",
      abv: "6.0-7.5%",
      description:
        "Complex, fruity ale with spicy yeast character and smooth finish.",
      ingredients: [
        "10 lbs Pilsner Malt",
        "1 lb Munich Malt",
        "1 lb Belgian Candi Sugar",
        "1.5 oz Styrian Goldings Hops",
        "1 oz Saaz Hops",
        "Belgian Ale Yeast",
      ],
      steps: [
        "Heat 4 gallons of water to 165°F",
        "Add grains and maintain 148°F for 60 minutes",
        "Sparge with 3 gallons of 170°F water",
        "Boil for 90 minutes, add Styrian Goldings at start",
        "Add candi sugar at 15 minutes remaining",
        "Add Saaz hops at 5 minutes remaining",
        "Cool to 68°F and transfer to fermenter",
        "Pitch yeast and ferment for 2 weeks at 68-72°F",
        "Condition for 3-4 weeks",
        "Bottle or keg with higher carbonation",
      ],
      tips: [
        "Yeast selection is crucial for flavor",
        "Higher fermentation temps enhance esters",
        "Belgian beers are highly carbonated",
        "Candi sugar adds alcohol without body",
      ],
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
              <a href="/" className="hover:text-[#F59E0B] transition-colors">
                Home
              </a>
              <a
                href="/brewing-guides"
                className="hover:text-[#F59E0B] transition-colors font-semibold"
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
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2C1810] to-[#4A2C1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-merriweather">
            Complete Brewing Guides
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl">
            Step-by-step recipes and techniques for brewing your favorite beer
            styles at home
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-[#2C1810] mb-3 font-merriweather">
                        {guide.name}
                      </h3>
                      <p className="text-gray-600 text-lg mb-4">
                        {guide.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={20} className="text-[#F59E0B]" />
                          <span className="text-sm font-semibold">
                            {guide.difficulty}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={20} className="text-[#F59E0B]" />
                          <span className="text-sm">{guide.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Beer size={20} className="text-[#F59E0B]" />
                          <span className="text-sm">ABV: {guide.abv}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Ingredients */}
                    <div>
                      <h4 className="text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                        <ChevronRight className="text-[#F59E0B]" />
                        Ingredients
                      </h4>
                      <ul className="space-y-2">
                        {guide.ingredients.map((ingredient, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#F59E0B] mt-1">•</span>
                            <span className="text-gray-700">{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Brewing Steps */}
                    <div>
                      <h4 className="text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                        <ChevronRight className="text-[#F59E0B]" />
                        Brewing Steps
                      </h4>
                      <ol className="space-y-3">
                        {guide.steps.map((step, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="bg-[#F59E0B] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="mt-8 bg-[#FFF8F0] p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                      <ChevronRight className="text-[#F59E0B]" />
                      Pro Tips
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {guide.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#F59E0B] mt-1">✓</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#2C1810] to-[#4A2C1A] text-white p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4 font-merriweather">
              Want to Learn More?
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              Join our online courses for hands-on guidance and expert tips
            </p>
            <a
              href="/book-course"
              className="bg-[#F59E0B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#D97706] transition-colors inline-block"
            >
              Book a Course Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
