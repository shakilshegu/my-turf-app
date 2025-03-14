import { Clock, DollarSign, MapPin, Star, Users } from "lucide-react";

interface Turf {
  name: string;
  rating: number;
  reviewCount: number;
  location: string;
  sports: string[];
  description: string;
  capacity: string;  // Previously number, now updated to match '5v5 - 7v7'
  hours: string;
  price: number;
  images: string[];
}

interface TurfInfoProps {
  turf: Turf;
}

const TurfInfo: React.FC<TurfInfoProps> = ({ turf }) => {
  return (
    <div className="rounded-xl bg-gray-800 shadow-md p-6 mb-8">
      <h1 className="text-3xl font-bold text-white mb-2">{turf.name}</h1>
      
      <div className="flex items-center mb-4">
        <div className="flex items-center text-amber-500 mr-4">
          <Star className="w-5 h-5 fill-current mr-1" />
          <span className="font-semibold">{turf.rating}</span>
          <span className="text-gray-500 ml-1">({turf.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{turf.location}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {turf.sports.map(sport => (
          <span 
            key={sport} 
            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {sport}
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 mb-6">{turf.description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <Users className="w-5 h-5 text-green-600 mr-2" />
          <div>
            <div className="text-sm text-gray-500">Capacity</div>
            <div className="font-medium">{turf.capacity} players</div>
          </div>
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-green-600 mr-2" />
          <div>
            <div className="text-sm text-gray-500">Opening Hours</div>
            <div className="font-medium">{turf.hours}</div>
          </div>
        </div>
        <div className="flex items-center">
          <DollarSign className="w-5 h-5 text-green-600 mr-2" />
          <div>
            <div className="text-sm text-gray-500">Price</div>
            <div className="font-medium">₹{turf.price}/hour</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurfInfo;