import Link from 'next/link';

export default function UserHeader() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-600">
              TurfBook
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/browse" className="text-gray-700 hover:text-green-600 px-3 py-2">
              Browse Turfs
            </Link>
            <Link href="/bookings" className="text-gray-700 hover:text-green-600 px-3 py-2">
              My Bookings
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-green-600 px-3 py-2">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
