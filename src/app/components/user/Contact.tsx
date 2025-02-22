import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

interface ContactProps {
    phone: string;
    email: string;
    socialMedia: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
  }

  const Contact: React.FC<ContactProps> = ({ phone, email, socialMedia }) => {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact & Social Media</h2>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-green-600 mr-3" />
            <a href={`tel:${phone}`} className="text-gray-700 hover:text-green-600 transition-colors">
              {phone}
            </a>
          </div>
          
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-green-600 mr-3" />
            <a href={`mailto:${email}`} className="text-gray-700 hover:text-green-600 transition-colors">
              {email}
            </a>
          </div>
          
          <div className="flex space-x-4 mt-4">
            {socialMedia.facebook && (
              <a 
                href={socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            )}
            {socialMedia.instagram && (
              <a 
                href={socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            )}
            {socialMedia.twitter && (
              <a 
                href={socialMedia.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };
  export default Contact