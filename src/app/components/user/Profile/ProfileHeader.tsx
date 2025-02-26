import React from 'react';
import Image from 'next/image';

interface ProfileHeaderProps {
  profile: {
    name: string;
    coverPhoto: string;
  };
  isEditing: boolean;
  onEdit: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile}) => {
  return (
    <div className="relative h-72 bg-gradient-to-r from-green-400 to-blue-500">
      {/* Cover Photo */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={profile.coverPhoto}
          alt="Cover Photo"
          className="w-full h-full object-cover"
          width={1200}
          height={300}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      
      {/* Edit Button */}
      {/* {!isEditing && (
        <Button 
          onClick={onEdit}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 shadow-md backdrop-blur-sm"
          size="sm"
        >
          <Edit2 className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      )} */}
      
      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default ProfileHeader;
