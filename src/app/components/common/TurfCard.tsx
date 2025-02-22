// components/common/TurfCard.tsx
import Image from 'next/image'
import Link from 'next/link'

type TurfCardProps = {
  id: string
  name: string
  location: string
  price: number
  rating: number
  imageUrl: string
  sports: string[]
}

export default function TurfCard({ id, name, location, price, rating, imageUrl, sports }: TurfCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow">
          <span className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-semibold">{rating}</span>
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {sports.map((sport) => (
            <span key={sport} className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
              {sport}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-green-600 font-semibold">₹{price}/hour</div>
          <Link 
            href={`/turfs/${id}`}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}