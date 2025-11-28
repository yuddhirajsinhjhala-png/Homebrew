import { Beer, ExternalLink, ShoppingCart } from "lucide-react";

export default function EquipmentPage() {
  const equipmentCategories = [
    {
      category: "Starter Kits",
      description: "Everything you need to start brewing in one package",
      items: [
        {
          name: "Northern Brewer Brew Share Enjoy Starter Kit",
          price: "$99.99",
          description:
            "Complete starter kit with fermenter, bottles, ingredients, and instructions. Perfect for your first batch.",
          features: [
            "6.5 gallon fermenter",
            "Bottling equipment",
            "Recipe kit included",
            "Instruction manual",
          ],
          affiliateLink:
            "https://www.northernbrewer.com/products/brew-share-enjoy-homebrew-starter-kit",
          image:
            "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=400&q=80",
        },
        {
          name: "Brooklyn Brew Shop Beer Making Kit",
          price: "$45.00",
          description:
            "Compact 1-gallon kit ideal for apartment brewing and experimentation.",
          features: [
            "1 gallon fermenter",
            "Glass carboy",
            "Reusable equipment",
            "Recipe included",
          ],
          affiliateLink:
            "https://brooklynbrewshop.com/collections/beer-making-kits",
          image:
            "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80",
        },
      ],
    },
    {
      category: "Fermentation Equipment",
      description: "Essential vessels and tools for fermentation",
      items: [
        {
          name: "FastFerment Conical Fermenter (7.9 gal)",
          price: "$89.99",
          description:
            "Conical fermenter with collection ball for easy yeast harvesting and clearer beer.",
          features: [
            "Conical design",
            "Built-in yeast collection",
            "Temperature strip",
            "Easy to clean",
          ],
          affiliateLink:
            "https://www.amazon.com/FastFerment-Conical-Fermenter-Unit-7-9/dp/B00JN5DKFQ",
          image:
            "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80",
        },
        {
          name: "Fermonster 6 Gallon Carboy",
          price: "$34.99",
          description:
            "Durable plastic carboy with wide mouth for easy cleaning and filling.",
          features: [
            "6 gallon capacity",
            "Wide mouth opening",
            "Shatterproof",
            "Clear visibility",
          ],
          affiliateLink:
            "https://www.amazon.com/Fermonster-6-Gallon-Carboy/dp/B00JN5DKFQ",
          image:
            "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&q=80",
        },
        {
          name: "Speidel Plastic Fermenter (30L)",
          price: "$79.99",
          description:
            "Professional-grade plastic fermenter with conical bottom and spigot.",
          features: [
            "30 liter capacity",
            "Conical bottom",
            "Built-in spigot",
            "Graduated markings",
          ],
          affiliateLink:
            "https://www.morebeer.com/products/speidel-plastic-fermenter-30l.html",
          image:
            "https://images.unsplash.com/photo-1608434780680-d2e4c0e0c0e0?w=400&q=80",
        },
      ],
    },
    {
      category: "Brewing Kettles",
      description: "Pots and kettles for mashing and boiling",
      items: [
        {
          name: "Bayou Classic 10 Gallon Stainless Steel Brew Kettle",
          price: "$119.99",
          description:
            "Heavy-duty stainless steel kettle with built-in thermometer and valve.",
          features: [
            "10 gallon capacity",
            "Stainless steel 304",
            "Built-in thermometer",
            "Ball valve",
          ],
          affiliateLink:
            "https://www.amazon.com/Bayou-Classic-1044-44-Quart-Stainless-Steel/dp/B000VXHKMC",
          image:
            "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=400&q=80",
        },
        {
          name: "Concord Stainless Steel Home Brew Kettle (5 Gal)",
          price: "$59.99",
          description:
            "Affordable stainless steel kettle perfect for extract brewing.",
          features: [
            "5 gallon capacity",
            "Stainless steel",
            "Riveted handles",
            "Lid included",
          ],
          affiliateLink:
            "https://www.amazon.com/Concord-Stainless-Steel-Home-Kettle/dp/B00JN5DKFQ",
          image:
            "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80",
        },
      ],
    },
    {
      category: "Temperature Control",
      description: "Maintain perfect fermentation temperatures",
      items: [
        {
          name: "Inkbird ITC-308 Digital Temperature Controller",
          price: "$36.99",
          description:
            "Dual-stage temperature controller for precise fermentation control.",
          features: [
            "Dual relay output",
            "Heating & cooling control",
            "Digital display",
            "Alarm function",
          ],
          affiliateLink:
            "https://www.amazon.com/Inkbird-ITC-308-Temperature-Controller-Thermostat/dp/B011296704",
          image:
            "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80",
        },
        {
          name: "FermWrap Heater (15W)",
          price: "$29.99",
          description:
            "Flexible heating wrap for maintaining fermentation temperature in cold environments.",
          features: [
            "15 watt heating",
            "Flexible wrap design",
            "Even heat distribution",
            "Works with controllers",
          ],
          affiliateLink:
            "https://www.northernbrewer.com/products/fermwrap-heater",
          image:
            "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&q=80",
        },
      ],
    },
    {
      category: "Bottling & Kegging",
      description: "Package your finished beer",
      items: [
        {
          name: "Ferrari Bottle Filler with Spring Loaded Tip",
          price: "$8.99",
          description:
            "Spring-loaded bottle filler for easy, mess-free bottling.",
          features: [
            "Spring loaded",
            "Fits standard tubing",
            "Easy to sanitize",
            "Durable construction",
          ],
          affiliateLink:
            "https://www.amazon.com/Ferrari-Bottle-Filler-Spring-Loaded/dp/B00JN5DKFQ",
          image:
            "https://images.unsplash.com/photo-1608434780680-d2e4c0e0c0e0?w=400&q=80",
        },
        {
          name: "Kegco 5 Gallon Ball Lock Keg",
          price: "$89.99",
          description: "Reconditioned Cornelius keg for kegging your homebrew.",
          features: [
            "5 gallon capacity",
            "Ball lock connections",
            "Pressure relief valve",
            "Reconditioned",
          ],
          affiliateLink:
            "https://www.kegco.com/5-gallon-ball-lock-keg-reconditioned",
          image:
            "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=400&q=80",
        },
        {
          name: "Red Baron Bottle Capper",
          price: "$19.99",
          description:
            "Reliable bench capper for sealing bottles with crown caps.",
          features: [
            "Bench mount design",
            "Adjustable height",
            "Durable construction",
            "Easy to use",
          ],
          affiliateLink:
            "https://www.northernbrewer.com/products/red-baron-bottle-capper",
          image:
            "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80",
        },
      ],
    },
    {
      category: "Testing & Measurement",
      description: "Monitor your brew with precision",
      items: [
        {
          name: "Hydrometer with Test Jar",
          price: "$12.99",
          description:
            "Essential tool for measuring specific gravity and calculating ABV.",
          features: [
            "Triple scale",
            "Test jar included",
            "Accurate readings",
            "Easy to read",
          ],
          affiliateLink:
            "https://www.amazon.com/Home-Brew-Stuff-Hydrometer-Test/dp/B00JN5DKFQ",
          image:
            "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80",
        },
        {
          name: "Tilt Hydrometer & Thermometer (Digital)",
          price: "$135.00",
          description:
            "Wireless digital hydrometer that tracks fermentation in real-time via smartphone.",
          features: [
            "Bluetooth connectivity",
            "Real-time monitoring",
            "Temperature & gravity",
            "Cloud logging",
          ],
          affiliateLink: "https://tilthydrometer.com/",
          image:
            "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&q=80",
        },
        {
          name: "ThermoPro TP03 Digital Thermometer",
          price: "$14.99",
          description:
            "Fast, accurate digital thermometer for monitoring mash and boil temperatures.",
          features: [
            "Instant read",
            "Wide temperature range",
            "LCD display",
            "Auto shut-off",
          ],
          affiliateLink:
            "https://www.amazon.com/ThermoPro-TP03-Digital-Instant-Thermometer/dp/B01IHHLB3W",
          image:
            "https://images.unsplash.com/photo-1608434780680-d2e4c0e0c0e0?w=400&q=80",
        },
      ],
    },
    {
      category: "Cleaning & Sanitization",
      description: "Keep your equipment clean and sanitized",
      items: [
        {
          name: "PBW (Powdered Brewery Wash) - 4 lbs",
          price: "$24.99",
          description:
            "Professional-grade alkaline cleaner for removing organic residues.",
          features: [
            "4 pound container",
            "Biodegradable",
            "No scrubbing needed",
            "Professional grade",
          ],
          affiliateLink:
            "https://www.northernbrewer.com/products/pbw-powdered-brewery-wash",
          image:
            "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=400&q=80",
        },
        {
          name: "Star San Sanitizer - 32 oz",
          price: "$19.99",
          description:
            "No-rinse acid sanitizer that kills bacteria and wild yeast on contact.",
          features: [
            "32 oz bottle",
            "No rinse required",
            "Food safe",
            "Makes 160 gallons",
          ],
          affiliateLink: "https://www.northernbrewer.com/products/star-san",
          image:
            "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80",
        },
        {
          name: "Carboy Brush",
          price: "$9.99",
          description:
            "Long-handled brush for cleaning carboys and fermenters.",
          features: [
            "Long handle",
            "Curved design",
            "Soft bristles",
            "Durable construction",
          ],
          affiliateLink: "https://www.amazon.com/Carboy-Brush/dp/B00JN5DKFQ",
          image:
            "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80",
        },
      ],
    },
    {
      category: "Advanced Equipment",
      description: "Take your brewing to the next level",
      items: [
        {
          name: "Grainfather G30 All-in-One Brewing System",
          price: "$899.00",
          description:
            "Complete electric brewing system with built-in pump and temperature control.",
          features: [
            "7.9 gallon capacity",
            "Built-in pump",
            "Digital controller",
            "All-in-one design",
          ],
          affiliateLink: "https://www.grainfather.com/products/grainfather-g30",
          image:
            "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&q=80",
        },
        {
          name: "Anvil Foundry 10.5 Gallon Electric Brewing System",
          price: "$449.99",
          description:
            "Affordable all-in-one electric brewing system with recirculation pump.",
          features: [
            "10.5 gallon capacity",
            "Built-in pump",
            "1600W heating",
            "Digital display",
          ],
          affiliateLink: "https://www.anvilbrewing.com/foundry-10-5-gallon",
          image:
            "https://images.unsplash.com/photo-1608434780680-d2e4c0e0c0e0?w=400&q=80",
        },
        {
          name: "Blichmann Hop Rocket",
          price: "$189.99",
          description:
            "Inline hop infusion system for maximum hop aroma and flavor.",
          features: [
            "Stainless steel",
            "Inline design",
            "Easy to clean",
            "Professional results",
          ],
          affiliateLink:
            "https://www.blichmannengineering.com/products/hoprocket",
          image:
            "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=400&q=80",
        },
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
                className="hover:text-[#F59E0B] transition-colors"
              >
                Brewing Guides
              </a>
              <a
                href="/equipment"
                className="hover:text-[#F59E0B] transition-colors font-semibold"
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
            Brewing Equipment Guide
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl">
            Curated selection of the best brewing equipment with affiliate links
            for easy purchasing
          </p>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {equipmentCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-[#2C1810] mb-2 font-merriweather">
                    {category.category}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-xl font-bold text-[#2C1810] flex-1">
                            {item.name}
                          </h4>
                          <span className="text-[#F59E0B] font-bold text-lg ml-2">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>

                        <div className="mb-4">
                          <h5 className="font-semibold text-[#2C1810] mb-2">
                            Features:
                          </h5>
                          <ul className="space-y-1">
                            {item.features.map((feature, fIdx) => (
                              <li
                                key={fIdx}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <span className="text-[#F59E0B] mt-0.5">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a
                          href={item.affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-[#F59E0B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D97706] transition-colors w-full"
                        >
                          <ShoppingCart size={20} />
                          Buy Now
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-16 bg-white p-8 rounded-lg border-2 border-[#F59E0B]">
            <h3 className="text-xl font-bold text-[#2C1810] mb-3">
              Affiliate Disclosure
            </h3>
            <p className="text-gray-600">
              BrewMaster Home participates in affiliate programs. When you
              purchase equipment through our links, we may earn a small
              commission at no extra cost to you. This helps us continue
              providing free brewing guides and content. We only recommend
              products we believe in and that will help you brew better beer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
