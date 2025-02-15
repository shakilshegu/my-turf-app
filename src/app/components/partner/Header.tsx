import Link from 'next/link';

export default function PartnerHeader() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/partner" className="text-2xl font-bold">
              TurfBook Partner
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/partner/turfs" className="text-gray-300 hover:text-white px-3 py-2">
              My Turfs
            </Link>
            <Link href="/partner/bookings" className="text-gray-300 hover:text-white px-3 py-2">
              Bookings
            </Link>
            <Link href="/partner/profile" className="text-gray-300 hover:text-white px-3 py-2">
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}