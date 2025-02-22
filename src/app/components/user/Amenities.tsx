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
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {amenities.map((item, index) => (
            <div key={index} className="flex items-center">
              {item.available ? (
                <Check className="w-5 h-5 text-green-500 mr-2" />
              ) : (
                <X className="w-5 h-5 text-red-500 mr-2" />
              )}
              <span className={item.available ? 'text-gray-900' : 'text-gray-500'}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Amenities  