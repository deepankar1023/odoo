import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      points: 25,
      image: "/placeholder.svg?height=400&width=350",
      condition: "Excellent",
      size: "M",
      user: "Sarah M.",
      category: "Outerwear"
    },
    {
      id: 2,
      title: "Designer Silk Blouse",
      points: 35,
      image: "/placeholder.svg?height=400&width=350",
      condition: "Like New",
      size: "S",
      user: "Emma K.",
      category: "Tops"
    },
    {
      id: 3,
      title: "Casual Summer Dress",
      points: 30,
      image: "/placeholder.svg?height=400&width=350",
      condition: "Very Good",
      size: "M",
      user: "Lisa T.",
      category: "Dresses"
    },
    {
      id: 4,
      title: "Athletic Running Shoes",
      points: 20,
      image: "/placeholder.svg?height=400&width=350",
      condition: "Good",
      size: "9",
      user: "Mike R.",
      category: "Footwear"
    },
    {
      id: 5,
      title: "Wool Winter Coat",
      points: 45,
      image: "/placeholder.svg?height=400&width=350",
      condition: "Excellent",
      size: "L",
      user: "Anna P.",
      category: "Outerwear"
    }
  ]

  const categories = [
    { name: 'Tops', icon: '👕', color: 'from-blue-500 to-cyan-500', count: '1,234' },
    { name: 'Bottoms', icon: '👖', color: 'from-indigo-500 to-purple-500', count: '856' },
    { name: 'Dresses', icon: '👗', color: 'from-pink-500 to-rose-500', count: '642' },
    { name: 'Outerwear', icon: '🧥', color: 'from-green-500 to-emerald-500', count: '423' },
    { name: 'Footwear', icon: '👟', color: 'from-orange-500 to-red-500', count: '789' },
    { name: 'Accessories', icon: '👜', color: 'from-purple-500 to-pink-500', count: '567' }
  ]

  const impactStats = [
    { label: 'Items Exchanged', value: '12,847', icon: '♻️' },
    { label: 'CO2 Saved (kg)', value: '8,234', icon: '🌱' },
    { label: 'Active Members', value: '3,456', icon: '👥' },
    { label: 'Points Earned', value: '156K', icon: '⭐' }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [featuredItems.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-blue-50 m-0 p-0">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="w-full">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                ReWear
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              <Link to="/browse" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-lg">
                Browse Items
              </Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-lg">
                How It Works
              </Link>
              <Link to="/impact" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-lg">
                Our Impact
              </Link>
            </nav>

            {/* Auth Section */}
            <div className="flex items-center space-x-6">
              <SignedOut>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-green-600 px-6 py-3 rounded-lg transition-colors font-medium text-lg"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg text-lg"
                >
                  Join ReWear
                </Link>
              </SignedOut>
              
              <SignedIn>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-green-600 px-6 py-3 rounded-lg transition-colors font-medium text-lg"
                >
                  Dashboard
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-12 h-12 rounded-full border-2 border-green-400"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-24 lg:py-32">

        <div className="text-center w-full">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Swap. Share.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Sustain.
            </span>
          </h1>
          
          <p className="text-2xl lg:text-3xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
            Join the community clothing exchange that's revolutionizing sustainable fashion. 
            Give your unused clothes a new life while discovering amazing pieces from others.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <SignedOut>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-5 rounded-2xl text-xl font-semibold transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Start Swapping
              </Link>
              <Link
                to="/browse"
                className="border-2 border-green-500 hover:bg-green-50 text-green-600 px-12 py-5 rounded-2xl text-xl font-semibold transition-all"
              >
                Browse Items
              </Link>
              <Link
                to="/add-item"
                className="border-2 border-blue-500 hover:bg-blue-50 text-blue-600 px-12 py-5 rounded-2xl text-xl font-semibold transition-all"
              >
                List an Item
              </Link>
            </SignedOut>
            
            <SignedIn>
              <Link
                to="/browse"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-5 rounded-2xl text-xl font-semibold transition-all transform hover:scale-105 shadow-xl"
              >
                Browse Items
              </Link>
              <Link
                to="/add-item"
                className="border-2 border-green-500 hover:bg-green-50 text-green-600 px-12 py-5 rounded-2xl text-xl font-semibold transition-all"
              >
                List an Item
              </Link>
              <Link
                to="/dashboard"
                className="border-2 border-blue-500 hover:bg-blue-50 text-blue-600 px-12 py-5 rounded-2xl text-xl font-semibold transition-all"
              >
                My Dashboard
              </Link>
            </SignedIn>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Carousel */}
      <section className="w-full mb-24">
        <div className="text-center mb-16 px-8 lg:px-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Featured Items
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600">
            Discover amazing pieces from our community members
          </p>
        </div>
        
        <div className="relative overflow-hidden bg-white/60 backdrop-blur-sm border-y border-white/20 shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredItems.map((item, index) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className="flex flex-col lg:flex-row items-center p-12 lg:p-20">
                  <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-16">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-lg font-medium">
                        {item.condition}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-lg">
                        Size {item.size}
                      </span>
                    </div>
                    <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xl lg:text-2xl text-gray-600 mb-6">
                      {item.category} • Listed by {item.user}
                    </p>
                    <div className="flex items-center space-x-6 mb-8">
                      <span className="text-3xl lg:text-4xl font-bold text-green-600">
                        {item.points} Points
                      </span>
                      <span className="text-xl text-gray-500">or Direct Swap</span>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                      <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all transform hover:scale-105">
                        View Details
                      </button>
                      <button className="border-2 border-green-500 hover:bg-green-50 text-green-600 px-8 py-4 rounded-xl text-lg font-medium transition-all">
                        Request Swap
                      </button>
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="relative">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.title}
                        className="w-96 lg:w-[450px] h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-lg font-medium text-gray-700">{item.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-4 rounded-full transition-all shadow-lg"
          >
            <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-4 rounded-full transition-all shadow-lg"
          >
            <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {featuredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === currentSlide ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full px-8 lg:px-16 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Shop by Category
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600">
            Find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={`/browse?category=${category.name.toLowerCase()}`}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${category.color} p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                <div className="text-center text-white">
                  <div className="text-7xl mb-6">{category.icon}</div>
                  <h3 className="font-bold text-2xl lg:text-3xl mb-3">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {category.count} items
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-white/60 backdrop-blur-sm py-24 lg:py-32">
        <div className="w-full px-8 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How ReWear Works
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600">
              Simple steps to sustainable fashion
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16 w-full">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">List Your Items</h3>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Upload photos and details of clothes you no longer wear. Set points or mark for direct swap.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Browse & Swap</h3>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Discover amazing pieces from others. Request swaps or use points to redeem items you love.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Make Impact</h3>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Reduce waste, save money, and build a sustainable wardrobe while helping the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-green-500 to-blue-500 py-24 lg:py-32">
        <div className="w-full px-8 lg:px-16 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Start Your Sustainable Fashion Journey?
          </h2>
          <p className="text-2xl lg:text-3xl text-white/90 mb-12 max-w-5xl mx-auto">
            Join thousands of users who are already making a difference, one swap at a time.
          </p>
          
          <SignedOut>
            <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-8">
              <Link
                to="/signup"
                className="bg-white hover:bg-gray-100 text-green-600 px-12 py-5 rounded-2xl text-xl font-semibold transition-all transform hover:scale-105 shadow-xl"
              >
                Join ReWear Today
              </Link>
              <Link
                to="/browse"
                className="border-2 border-white hover:bg-white/10 text-white px-12 py-5 rounded-2xl text-xl font-semibold transition-all"
              >
                Explore Items
              </Link>
            </div>
          </SignedOut>
          
          <SignedIn>
            <Link
              to="/add-item"
              className="bg-white hover:bg-gray-100 text-green-600 px-12 py-5 rounded-2xl text-xl font-semibold transition-all transform hover:scale-105 shadow-xl"
            >
              List Your First Item
            </Link>
          </SignedIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-16 lg:py-20">
        <div className="w-full px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="text-2xl font-bold">ReWear</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Making sustainable fashion accessible to everyone through community-driven clothing exchange.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-xl">Platform</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/browse" className="hover:text-white transition-colors text-lg">Browse Items</Link></li>
                <li><Link to="/add-item" className="hover:text-white transition-colors text-lg">List an Item</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white transition-colors text-lg">How It Works</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-xl">Community</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/impact" className="hover:text-white transition-colors text-lg">Our Impact</Link></li>
                <li><Link to="/guidelines" className="hover:text-white transition-colors text-lg">Community Guidelines</Link></li>
                <li><Link to="/sustainability" className="hover:text-white transition-colors text-lg">Sustainability</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-xl">Support</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors text-lg">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors text-lg">Contact Us</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors text-lg">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2025 ReWear. Making fashion sustainable, one swap at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}