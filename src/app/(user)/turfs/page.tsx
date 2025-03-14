import SearchFilters from "@/app/components/common/SearchFilters"
import TurfCard from "@/app/components/common/TurfCard"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

// This would normally come from an API
const turfData = [
  {
    id: '1',
    name: 'Green Valley Turf',
    location: 'Andheri West, Mumbai',
    price: 1200,
    rating: 4.5,
    imageUrl: '/uploads/IM1.jpg',
    sports: ['Football', 'Cricket']
  },
  {
    id: '2',
    name: 'Sports Arena',
    location: 'Bandra East, Mumbai',
    price: 1500,
    rating: 4.8,
    imageUrl: '/uploads/IM2.jpg',
    sports: ['Football', 'Tennis', 'Basketball']
  },
  {
    id: '3',
    name: 'Premier Pitch',
    location: 'Powai, Mumbai',
    price: 1300,
    rating: 4.6,
    imageUrl: '/uploads/IM3.jpg',
    sports: ['Football', 'Cricket']
  },
  {
    id: '4',
    name: 'Urban PlayField',
    location: 'Juhu, Mumbai',
    price: 1600,
    rating: 4.7,
    imageUrl: '/uploads/IM4.jpg',
    sports: ['Football', 'Tennis']
  },
  {
    id: '5',
    name: 'Victory Grounds',
    location: 'Dadar, Mumbai',
    price: 1100,
    rating: 4.3,
    imageUrl: '/uploads/IM1.jpg',
    sports: ['Cricket', 'Football']
  },
  {
    id: '6',
    name: 'Central Sports Hub',
    location: 'Worli, Mumbai',
    price: 1800,
    rating: 4.9,
    imageUrl: '/uploads/IM2.jpg',
    sports: ['Football', 'Basketball', 'Tennis']
  }
]

export default function TurfsPage() {
  return (
    <div className="min-h-screen ">
      {/* Enhanced Header with Green Background */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Book a Turf</h1>
              <p className="mt-2 text-green-100 max-w-2xl">
                Find and book the perfect turf for your game. We have the best selection of sports facilities across Mumbai.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="/"
                className="inline-flex items-center px-4 py-2 bg-white text-green-700 rounded-md font-medium hover:bg-green-50 transition-colors"
              >
                <ChevronLeft className="mr-1 h-5 w-5" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Your Perfect Turf</h2>
          <SearchFilters />
        </div>

        {/* Results Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <p className="text-gray-700 font-medium">
            Showing <span className="font-semibold">{turfData.length}</span> turfs in Mumbai
          </p>
          <div className="mt-2 sm:mt-0 flex items-center">
            <span className="mr-2 text-gray-600">Sort by:</span>
            <select className="border rounded-md px-3 py-1.5 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: High to Low</option>
            </select>
          </div>
        </div>

        {/* Turfs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {turfData.map((turf) => (
            <TurfCard
              key={turf.id}
              {...turf}
            />
          ))}
        </div>

        {/* Enhanced Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex items-center rounded-md shadow-sm" aria-label="Pagination">
            <button className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-green-300 bg-white text-sm font-medium text-gray-700 hover:bg-green-50">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-green-300 bg-green-600 text-sm font-medium text-white">
              1
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-green-300 bg-white text-sm font-medium text-gray-700 hover:bg-green-50">
              2
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-green-300 bg-white text-sm font-medium text-gray-700 hover:bg-green-50">
              3
            </button>
            <span className="relative inline-flex items-center px-4 py-2 border border-green-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <button className="relative inline-flex items-center px-4 py-2 border border-green-300 bg-white text-sm font-medium text-gray-700 hover:bg-green-50">
              8
            </button>
            <button className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-green-300 bg-white text-sm font-medium text-gray-700 hover:bg-green-50">
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}