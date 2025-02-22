import { Star } from "lucide-react";

interface Review {
    userName: string;
    userAvatar: string;
    rating: number;
    date: string;
    comment: string;
  }
  
  interface ReviewsProps {
    reviews: Review[];
  }

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Reviews</h2>
          <span className="text-green-600 font-medium cursor-pointer hover:underline">
            See all {reviews.length} reviews
          </span>
        </div>
        
        <div className="space-y-4">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="pb-4 border-b last:border-b-0 last:pb-0">
              <div className="flex items-center mb-2">
                <img 
                  src={review.userAvatar} 
                  alt={review.userName}
                  className="w-10 h-10 rounded-full mr-3" 
                />
                <div>
                  <div className="font-medium">{review.userName}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Reviews