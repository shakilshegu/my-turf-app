import React from 'react';
import { Camera } from 'lucide-react';

const ProfileImageUpload: React.FC = () => {
  return (
    <div className="absolute bottom-0 right-0 p-1 bg-green-500 rounded-full text-white cursor-pointer hover:bg-green-600 transition-colors">
      <Camera className="w-4 h-4" />
    </div>
  );
};

export default ProfileImageUpload;