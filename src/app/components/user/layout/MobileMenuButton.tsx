import React from "react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
      aria-label="Toggle menu"
    >
      <div className="relative w-6 h-6">
        <span
          className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? "rotate-45 top-3" : "top-2"
          }`}
        />
        <span
          className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? "opacity-0" : "top-3"
          }`}
        />
        <span
          className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? "-rotate-45 top-3" : "top-4"
          }`}
        />
      </div>
    </button>
  );
};

export default MobileMenuButton;