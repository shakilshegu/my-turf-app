import { Facebook, Instagram, Mail, MapPin, Twitter } from "lucide-react";

interface LocationProps {
  address: string;
  mapUrl: string;
}

const Location: React.FC<LocationProps> = ({ address, mapUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
      <div className="bg-gray-100 rounded-lg overflow-hidden h-64 mb-4">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          title="Google Maps"
          className="transition-opacity duration-700 opacity-90 hover:opacity-100"
        ></iframe>
      </div>
      <div className="flex items-start">
        <MapPin className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
        <p className="text-gray-700">{address}</p>
      </div>
    </div>
  );
};

export default Location;
