import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold mb-6">
            Book Your Perfect Turf Instantly
          </h1>
          <p className="text-xl mb-8">
            Find and book sports facilities near you with just a few clicks
          </p>
          <Link
            href="/browse"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Browse Turfs
          </Link>
        </div>
      </div>

      {/* Featured Turfs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Turfs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add turf cards here */}
        </div>
      </div>
    </div>
  );
}