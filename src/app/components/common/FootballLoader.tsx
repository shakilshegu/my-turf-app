import React from 'react';

const FootballLoader = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
      {/* Football animation container */}
      <div className="relative">
        {/* Shadow - fades in/out with the bounce */}
        <div className="w-8 h-2 bg-black/20 rounded-full mx-auto animate-ping" />
        
        {/* Football with multiple animations */}
        <div className="text-4xl animate-bounce relative">
          <span className="inline-block animate-spin">⚽</span>
        </div>
      </div>

      {/* Animated loading text */}
      <div className="flex gap-1 text-lg font-semibold text-gray-700">
        {text.split('').map((letter, index) => (
          <span 
            key={index}
            className="animate-bounce"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              animationDuration: '1s'
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Optional loading progress bar */}
      <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full animate-[loading_2s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};

// Define the loading animation
const styles = `
  @keyframes loading {
    0% { width: 0% }
    50% { width: 100% }
    100% { width: 0% }
  }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default FootballLoader;