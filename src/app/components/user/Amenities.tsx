import { Check, X } from "lucide-react";

interface Amenity {
  name: string;
  available: boolean;
}

interface AmenitiesProps {
  amenities: Amenity[];
}

const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  return (
    <div className="rounded-xl shadow-lg p-6 mb-8 bg-gray-800 text-white">
      <h2 className="text-xl font-semibold mb-4">Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {amenities.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.available ? (
              <Check className="w-5 h-5 text-green-500 mr-2" />
            ) : (
              <X className="w-5 h-5 text-red-500 mr-2" />
            )}
            <span className={item.available ? 'text-white' : 'text-gray-400'}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;