import React, { useEffect, useRef } from 'react';
// import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon,
  trend = 'neutral',
  trendValue
}) => {
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (valueRef.current) {
      gsap.from(valueRef.current, {
        textContent: 0,
        duration: 1.5,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: {
          each: 0.2,
          onUpdate: function() {
            // Only update if the value is a number
            if (!isNaN(parseFloat(value))) {
              valueRef.current!.textContent = value;
            }
          }
        }
      });
    }
  }, [value]);

  const getTrendColor = () => {
    switch(trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getTrendIcon = () => {
    switch(trend) {
      case 'up':
        return <ArrowUp className="w-3 h-3" />;
      case 'down':
        return <ArrowDown className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (

    <>
    
    </>
    // <Card className="overflow-hidden hover:shadow-md transition-shadow">
    //   {/* <CardContent className="p-6">
    //     <div className="flex justify-between items-center">
    //       <div>
    //         <p className="text-sm font-medium text-gray-500">{title}</p>
    //         <div className="flex items-center mt-1">
    //           <div ref={valueRef} className="text-2xl font-bold text-gray-800">
    //             {!isNaN(parseFloat(value)) ? '0' : value}
    //           </div>
    //           {trendValue && (
    //             <span className={`ml-2 text-xs flex items-center ${getTrendColor()}`}>
    //               {getTrendIcon()}
    //               {trendValue}
    //             </span>
    //           )}
    //         </div>
    //       </div>
    //       <div className="p-3 bg-green-50 text-green-600 rounded-lg">
    //         {icon}
    //       </div>
    //     </div>
    //   </CardContent> */}
    // </Card>
  );
};

export default StatsCard;